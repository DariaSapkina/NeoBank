import { Slider, Spinner } from "@/components";
import { useNews } from "@/hooks";
import "./SliderSection.scss";

const SliderSection = () => {
  const { data, loading } = useNews();

  return (
    <section className="sliderSection">
      <h2 className="sliderSection__title">
        Current news from the world of finance
      </h2>
      <p className="sliderSection__description">
        We update the news feed every 15 minutes. You can learn more by clicking
        on the news you are interested in.
      </p>
      <div className="sliderSection__sliderWrapper">
        {loading ? (
          <div className="sliderSection__spinner">
            <Spinner />
          </div>
        ) : (
          <Slider articles={data?.articles || []} />
        )}
      </div>
    </section>
  );
};

export { SliderSection };
