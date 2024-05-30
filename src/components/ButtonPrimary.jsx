import React from "react";
import PropTypes from "prop-types";
import { Loader2 } from "lucide-react";

const ButtonPrimary = React.forwardRef(
  ({ className, children, loading, onClick, ...props }, ref) => {
    return (
      <button
        className={`text-sm font-bold text-textColor transition-all rounded-full bg-primaryColor hover:bg-hoverPrimaryColor ${className} ${
          loading && "bg-opacity-50 pointer-events-none"
        }`}
        onClick={onClick}
        ref={ref}
        disabled={loading}
        {...props}
      >
        {loading ? (
          <div className="min-w-[130px] flex justify-center">
            <Loader2 className="w-5 h-5 animate-spin" />
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
};

export default ButtonPrimary;
