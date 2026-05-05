import NotFoundError from "@/assets/NotFoundError.png";
import { Button } from "@/components";
import { useNavigate } from "react-router-dom";
import "./NotFoundPage.scss";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="notFoundPage">
      <section className="notFoundPage__wrapper">
        <div className="notFoundPage__content">
          <h1 className="notFoundPage__title">
            <span>Oops....</span>
            <span>Page not found</span>
          </h1>
          <p className="notFoundPage__description">
            This Page doesn`t exist or was removed! We suggest you go back.
          </p>
          <div className="notFoundPage__buttonWrapper">
            <Button
              size="small"
              radius="small"
              title="Go back"
              onClick={() => navigate(-1)}
            />
          </div>
        </div>
        <img className="notFoundPage__img" src={NotFoundError} alt="" />
      </section>
    </div>
  );
};

export { NotFoundPage };
