"use client";

import { Box, Card, Text } from "@radix-ui/themes";
import {
  BookA,
  Ellipsis,
  Folders,
  GraduationCap,
  Hammer,
  Newspaper,
  PaintBucket,
} from "lucide-react";
import { redirect } from "next/navigation";

export default function page() {
  type Page = {
    name: string;
    icon: React.ReactNode;
    path: string;
  };

  const pages = [
    {
      name: "Ferramentas",
      icon: <Hammer size={28} />,
      path: "/dashboard/tools",
    },
    {
      name: "Design/UI",
      icon: <PaintBucket size={28} />,
      path: "/dashboard/design",
    },
    {
      name: "Artigos",
      icon: <Newspaper size={28} />,
      path: "/dashboard/artigos",
    },
    {
      name: "Estudos",
      icon: <BookA size={28} />,
      path: "/dashboard/estudos",
    },
    {
      name: "Cursos",
      icon: <GraduationCap size={28} />,
      path: "/dashboard/cursos",
    },
    {
      name: "Projects",
      icon: <Folders size={28} />,
      path: "/dashboard/projects",
    },
    {
      name: "Outros",
      icon: <Ellipsis size={28} />,
      path: "/dashboard/outros",
    },
  ];

  return (
    <Box
      px="2"
      py="2"
      style={{
        backgroundColor: "var(--gray-a3)",
        borderRadius: "var(--radius-3)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        gap: "var(--space-5)",
        height: "96vh",
      }}
    >
      {pages?.map((page: Page, index: number) => {
        return (
          <Box
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "4px",
              cursor: "pointer",
            }}
            onClick={() => redirect(page.path)}
          >
            <Card
              size="3"
              style={{ display: "flex", justifyContent: "center" }}
            >
              {page.icon}
            </Card>
            <Text style={{ fontWeight: "500" }} align={"center"} size={"1"}>
              {page.name}
            </Text>
          </Box>
        );
      })}
    </Box>
  );
}
