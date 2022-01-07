import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"
import MenuItem from "@mui/material/MenuItem"
import { Link as MuiLink } from "@mui/material"
import Link from "next/link"

const pages = new Map([
  ["とっぷ", "/"],
  ["ぶろぐ", "/posts"],
])

const PageHead = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <header>
      <AppBar
        position="fixed"
        style={{ backgroundColor: "aquamarine", color: "#4d9980" }}
      >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: "20px", ml: "20px", display: { xs: "flex", md: "flex" } }}
          >
            るーどっとでぶ
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              style={{ marginLeft: "auto" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              {Array.from(pages.entries()).map(([key, value]) => (
                <MenuItem key={key} onClick={handleCloseNavMenu}>
                  <Link href={value}>
                    <Typography textAlign="center">{key}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {Array.from(pages.entries()).map(([key, value]) => (
              <Button
                key={key}
                href={value}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#336655", display: "block" }}
              >
                {key}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  )
}
export default PageHead
