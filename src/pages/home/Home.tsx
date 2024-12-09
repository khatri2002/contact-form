import classNames from "classnames";
import styles from "./Home.module.scss";
import Snackbar from "../../components/snackbar/Snackbar";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "../../types";
import validator from "validator";

const Home = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);

    // dummy submission of form
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      reset();
      setShowSnackbar(true);
    }, 2000);
  };

  return (
    <main className={styles.main}>
      <div className={styles.box}>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.fieldsContainer}>
            <div className={styles.flex_}>
              <div
                className={classNames({
                  [styles.field]: true,
                  [styles.error]: errors.firstName,
                })}
              >
                <label htmlFor="first name" className={styles.label}>
                  First Name
                </label>
                <input
                  className={styles.inputText}
                  type="text"
                  {...register("firstName", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                  aria-invalid={errors.firstName ? "true" : "false"}
                />
                <span role="alert" className={styles.errorText}>
                  {errors.firstName?.message}
                </span>
              </div>
              <div
                className={classNames({
                  [styles.field]: true,
                  [styles.error]: errors.lastName,
                })}
              >
                <label htmlFor="last name" className={styles.label}>
                  Last Name
                </label>
                <input
                  type="text"
                  className={styles.inputText}
                  {...register("lastName", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                  aria-invalid={errors.lastName ? "true" : "false"}
                />
                <span role="alert" className={styles.errorText}>
                  {errors.lastName?.message}
                </span>
              </div>
            </div>
            <div
              className={classNames({
                [styles.field]: true,
                [styles.error]: errors.email,
              })}
            >
              <label htmlFor="first name" className={styles.label}>
                Email Address
              </label>
              <input
                type="text"
                className={styles.inputText}
                {...register("email", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  validate: (value) =>
                    validator.isEmail(value) ||
                    "Please enter a valid email address",
                })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              <span role="alert" className={styles.errorText}>
                {errors.email?.message}
              </span>
            </div>
            <div
              className={classNames({
                [styles.field]: true,
                [styles.error]: errors.queryType,
              })}
            >
              <span className={styles.label}>Query Type</span>
              <div className={styles.flex_}>
                <div
                  className={classNames({
                    [styles.radioBox]: true,
                    [styles.active]: false,
                  })}
                >
                  <input
                    type="radio"
                    {...register("queryType", {
                      required: {
                        value: true,
                        message: "Please select a query type",
                      },
                    })}
                    value="general-enquiry"
                  />
                  <label htmlFor="general enquiry">General Enquiry</label>
                </div>
                <div
                  className={classNames({
                    [styles.radioBox]: true,
                    [styles.active]: false,
                  })}
                >
                  <input
                    type="radio"
                    {...register("queryType", {
                      required: {
                        value: true,
                        message: "Please select a query type",
                      },
                    })}
                    value="support-request"
                  />
                  <label htmlFor="support request">Support Request</label>
                </div>
              </div>
              <span role="alert" className={styles.errorText}>
                {errors.queryType?.message}
              </span>
            </div>
            <div
              className={classNames({
                [styles.field]: true,
                [styles.error]: errors.message,
              })}
            >
              <label htmlFor="first name" className={styles.label}>
                Message
              </label>
              <textarea
                className={styles.inputText}
                rows={4}
                {...register("message", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
                aria-invalid={errors.message ? "true" : "false"}
              ></textarea>
              <span role="alert" className={styles.errorText}>
                {errors.message?.message}
              </span>
            </div>
            <div
              className={classNames({
                [styles.field]: true,
                [styles.checkbox]: true,
                [styles.error]: errors.consent,
              })}
            >
              <div className={styles.flexP}>
                <input
                  type="checkbox"
                  {...register("consent", {
                    required: {
                      value: true,
                      message:
                        "To submit this form, please consent to being contacted",
                    },
                  })}
                  aria-invalid={errors.consent ? "true" : "false"}
                />
                <label htmlFor="consent" className={styles.label}>
                  I consent to being contacted by the team
                </label>
              </div>
              <span role="alert" className={styles.errorText}>
                {errors.consent?.message}
              </span>
            </div>
          </div>
          <button disabled={loading} type="submit" className={styles.btn}>
            Submit
          </button>
        </form>
      </div>

      <Snackbar
        title="Message Sent!"
        description="Thanks for completing the form. We'll be in touch soon!"
        show={showSnackbar}
        close={() => setShowSnackbar(false)}
      />
    </main>
  );
};

export default Home;
