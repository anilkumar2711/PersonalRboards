"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Box, Typography, IconButton, Drawer, List, ListItem, ListItemText, Divider, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { Button } from "./button";
import { Input } from "./Input";
import Dropdown from "./Dropdown";
import { Settings, Menu } from "lucide-react";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Box
      sx={{
        p: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#EDF4FF",
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      {/* Logo */}
      <Box sx={{ pl: 2, display: "flex", alignItems: "center" }}>
        <img src="/Group 152.png" alt="rboard" />
        {isMobile && (
          <IconButton
            sx={{ ml: "auto", color: "black" }}
            onClick={toggleMobileMenu}
          >
            <Menu />
          </IconButton>
        )}
      </Box>

      {/* Search Bar */}
      {!isMobile && (
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ width: '30%'}}>
            <Input
                type="text"
                placeholder="Search..."
                sx={{
                  paddingLeft: "10px",
                  borderRadius: "9999px", // full rounding
                  width: "100%",
                  boxSizing: "border-box",
                }}
              />
          </div>
            <Box
              component="svg"
              xmlns="http://www.w3.org/2000/svg"
              sx={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                height: "20px",
                width: "20px",
                color: "gray",
              }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </Box>
        </Box>
      )}

      {/* Buttons and Dropdown */}
      {!isMobile && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2, // spacing between child elements
          }}
        >
          <Link href="/createboard">
            <Button
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                color: "white",
              }}
            >
              Create Board
            </Button>
          </Link>

          <Dropdown
            options={options}
            optionTag="a"
            hasDropIcon={false}
            placeholder={
              <Settings
                sx={{
                  height: 20,
                  width: 20,
                }}
              />
            }
          />
        </Box>
      )}

      {/* Mobile Drawer */}
      {isMobile && (
        <Drawer
          anchor="right"
          open={mobileMenuOpen}
          onClose={toggleMobileMenu}
        >
          <Box
            sx={{
              width: 250,
              padding: 2,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Menu
            </Typography>
            <Divider />
            <List>
              <ListItem button>
                <ListItemText>
                  <Link href="/createboard">Create Board</Link>
                </ListItemText>
              </ListItem>
              <ListItem>
                <Dropdown
                  options={options}
                  optionTag="a"
                  hasDropIcon={false}
                  placeholder={
                    <Settings
                      sx={{
                        height: 20,
                        width: 20,
                      }}
                    />
                  }
                />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
}

export default Header;
