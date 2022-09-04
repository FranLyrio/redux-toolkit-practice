type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, ...props }: ButtonProps) => <button {...props}>{children}</button>

export default Button