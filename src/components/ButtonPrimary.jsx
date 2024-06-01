import React from "react";
import PropTypes from "prop-types";
import { Loader2 } from "lucide-react";

const ButtonPrimary = React.forwardRef(
  (
    { className, children, loading, onClick, primary = true, ...props },
    ref
  ) => {
    return (
      <button
        className={`text-sm md:text-base lg:text-lg font-bold transition-all rounded-full ${
          primary
            ? "bg-primaryColor hover:bg-hoverPrimaryColor text-whiteColor"
            : "bg-transparent border border-primaryColor text-primaryColor hover:bg-primaryColor hover:bg-opacity-10"
        } ${className} ${loading && "bg-opacity-50 pointer-events-none"}`}
        onClick={onClick}
        ref={ref}
        disabled={loading}
        {...props}
      >
        {loading ? (
          <div className="flex justify-center">
            <Loader2 className="w-[22px] h-[22px] animate-spin" />
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);

ButtonPrimary.displayName = "ButtonPrimary";

ButtonPrimary.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  loading: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  primary: PropTypes.bool,
};

export default ButtonPrimary;
