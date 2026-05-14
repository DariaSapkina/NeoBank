import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { SubscribeSection } from "./SubscribeSection";
import { useSubscribeNewsLetter } from "@/hooks/useSubscribeNewsLetter";
import { SUBSCRIBE_NEWS_LETTER_VALUE } from "@/constants";

const mockHandleSubscribe = vi.fn(async (e: React.SubmitEvent) => {
  e.preventDefault();
  return true;
});

vi.mock("@/hooks/useSubscribeNewsLetter", () => ({
  useSubscribeNewsLetter: vi.fn(),
}));

const mockedUseSubscribeNewsLetter = vi.mocked(useSubscribeNewsLetter);

describe("SubscribeForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockedUseSubscribeNewsLetter.mockReturnValue({
      isSubscribe: false,
      error: null,
      isLoading: false,
      handleSubscribe: mockHandleSubscribe,
    });
  });

  test("show loading state", () => {
    mockedUseSubscribeNewsLetter.mockReturnValue({
      isSubscribe: false,
      error: null,
      isLoading: true,
      handleSubscribe: vi.fn(),
    });
    render(<SubscribeSection />);
    const button = screen.getByRole("button", {
      name: "Loading...",
    });
    expect(button).toBeInTheDocument();
  });

  test("show subscribed message", () => {
    mockedUseSubscribeNewsLetter.mockReturnValue({
      isSubscribe: true,
      error: null,
      isLoading: false,
      handleSubscribe: vi.fn(),
    });
    render(<SubscribeSection />);
    const message = screen.getByText(SUBSCRIBE_NEWS_LETTER_VALUE);
    expect(message).toBeInTheDocument();
  });

  test("show error message", () => {
    mockedUseSubscribeNewsLetter.mockReturnValue({
      isSubscribe: false,
      error: "Invalid email",
      isLoading: false,
      handleSubscribe: vi.fn(),
    });
    render(<SubscribeSection />);
    const error = screen.getByText("Invalid email");
    expect(error).toBeInTheDocument();
  });

  test("submit handler", async () => {
    const user = userEvent.setup();
    render(<SubscribeSection />);
    const input = screen.getByPlaceholderText("Your email");
    const button = screen.getByRole("button", {
      name: "Subscribe",
    });
    await user.type(input, "test@mail.ru");
    await user.click(button);
    expect(mockHandleSubscribe).toHaveBeenCalled();
  })
});
