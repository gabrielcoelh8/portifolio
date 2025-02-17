"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Button as ButtonMovingBorder } from "@/components/ui/moving-border";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, Linkedin, Globe, ExternalLink, FileUser } from "lucide-react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const stacks = [
  {
    id: 1,
    name: "Python",
    designation: "FastAPI, Selenium, pytest",
    image:
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png",
  },
  {
    id: 2,
    name: "React",
    designation: "Router, Tailwind CSS",
    image:
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png",
  },
  {
    id: 3,
    name: "Node",
    designation: "API REST, Express, ORM",
    image:
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png",
  },
  {
    id: 4,
    name: "Typescript",
    designation: "Javascript",
    image:
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/typescript.png",
  },
  {
    id: 5,
    name: "Next JS",
    designation: "Routing, PrismaORM, Vercel",
    image:
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/next_js.png",
  },
  {
    id: 6,
    name: "Java",
    designation: "DSA, OOP",
    image:
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/java.png",
  },
  {
    id: 7,
    name: "Spring Boot",
    designation: "MVC, API REST, Maven, Thymeleaf",
    image:
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/spring_boot.png",
  },
  {
    id: 8,
    name: "Laravel",
    designation: "PHP, Blade",
    image:
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/laravel.png",
  },
  {
    id: 9,
    name: "Postgres",
    designation: "SQL, Normalização",
    image:
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postgresql.png",
  },
  {
    id: 10,
    name: "Docker",
    designation: "Containêrs, compose",
    image:
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/docker.png",
  },
  {
    id: 11,
    name: "Ubuntu",
    designation: "WSL, Terminal",
    image:
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ubuntu.png",
  },
  {
    id: 12,
    name: "Godot",
    designation: "Game Design, GDScript, C#",
    image:
      "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/godot.png",
  },
];

const projects = [
  {
    title: "Projeto 1",
    description: "Descrição detalhada do projeto 1",
    image: "https://gist.github.com/user-attachments/assets/161111e9-9942-48c5-979a-878953f6c811",
    github: "https://github.com/seu-usuario/projeto1",
    deploy: "https://projeto1.com",
    tech: ["React", "TypeScript", "Node.js"]
  },
  {
    title: "Projeto 2",
    description: "Descrição detalhada do projeto 1",
    image: "https://gist.github.com/user-attachments/assets/161111e9-9942-48c5-979a-878953f6c811",
    github: "https://github.com/seu-usuario/projeto1",
    deploy: "https://projeto1.com",
    tech: ["React", "TypeScript", "Node.js"]
  },
  {
    title: "Projeto 3",
    description: "Descrição detalhada do projeto 1",
    image: "https://gist.github.com/user-attachments/assets/161111e9-9942-48c5-979a-878953f6c811",
    github: "https://github.com/seu-usuario/projeto1",
    deploy: "https://projeto1.com",
    tech: ["React", "TypeScript", "Node.js"]
  },
  {
    title: "Projeto 4",
    description: "Descrição detalhada do projeto 1",
    image: "https://gist.github.com/user-attachments/assets/161111e9-9942-48c5-979a-878953f6c811",
    github: "https://github.com/seu-usuario/projeto1",
    deploy: "https://projeto1.com",
    tech: ["React", "TypeScript", "Node.js"]
  },
];

const words = `Gabriel Roberto Alves Coelho`;

export default function Portfolio() {
  return (
    // <ShootingStars />
    // <StarsBackground />
    <div className="min-h-screen bg-background text-foreground p-8">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 items-start mb-12">
          {/* Avatar */}
          <ButtonMovingBorder
            borderRadius="4rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <Avatar className="w-32 h-32">
              <AvatarImage src="https://avatars.githubusercontent.com/u/64715936?v=4" />
              <AvatarFallback>GH</AvatarFallback>
            </Avatar>
          </ButtonMovingBorder>

          {/* Info */}
          <div className="flex-1">
            <TextGenerateEffect words={words} />
            <p className="text-lg text-muted-foreground mb-4">
              $ Desenvolvedor Full Stack <br />
              $ Tecnólogo em Sistemas para Internet (IFMS - 06/2021 até 12/2023)
            </p>
            <p className="text-xl text-muted-foreground mb-4">
              
            </p>
            
            {/* Contacts */}
            <div className="flex gap-4 mb-4">
              <a href="" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                <FileUser className="w-5 h-5" />
                <span>CV</span>
              </a>
              <a href="mailto:gabrielrobertoac@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                <Mail className="w-5 h-5" />
                <span>E-mail</span>
              </a>
              <a href="https://www.linkedin.com/in/gabriel-roberto-785472217/" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/gabrielcoelh8" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Stack Tecnológico</h2>
          <div className="flex flex-row items-center justify-start mb-10 w-full">
            <AnimatedTooltip items={stacks} />
          </div>
        </div>

        {/* Projects */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden">
                <CardHeader>
                  <div className="relative h-48 w-full mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </a>
                  </Button>
                  <Button asChild>
                    <a href={project.deploy} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}