import { Link } from "react-router-dom";
import Button from "./button.component";

export default function ButtonLink({ children, to = "/", variant = "ghost" }) {
    return (
        <Button variant={variant} >
            <Link to={to}>
                {children}
            </Link>
        </Button>)

};
