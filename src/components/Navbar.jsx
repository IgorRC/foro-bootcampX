import { Box, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { deleteUser } from "./Storage";

const linkStyles = {
	color: "#ffffffcc",
	transition: "color 0.15s",
	// lineHeight: "24px",
	_hover: { color: "#ffffff" },
};

function Navbar({ user, setUser }) {
	const navigate = useNavigate();
	function closeSesion() {
		setUser(null)
		deleteUser()
		navigate("/Login", { replace: true })
	}
	return (
		<Box as="nav" background="#ff6600" p="16px" mb="32px" width="100%">
			<Box
				color="white"
				display="flex"
				margin="auto"
				maxW="920px"
				justifyContent="space-between"
				alignItems="center"
			>
				<Link to="/" {...linkStyles}>
					Chaos news
        </Link>
				{user ? (
					<Button
						{...linkStyles}
						onClick={closeSesion}
					>logueado</Button>) : (
						<Link to="/login" {...linkStyles}>
							Login
						</Link>)
				}

			</Box>
		</Box>
	);
}
export default Navbar;
