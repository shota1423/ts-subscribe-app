type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const Button = ({ children, className, ...props }: Props) => {
  return (
    <button className={`rounded-md focus:outline-none ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
