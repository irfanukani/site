import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.article.create({
    data: {
      slug: "my-first-post",
      title: "My First Post",
      isPublished: true,
      markdown: "#Hello World",
      authorId: "45631b64-7112-4c6f-a20d-13c195195ca3",
    },
  });
}

main()
  .catch((e) => {
    console.log("Failed With Error  : " + e);
  })
  .finally(() => {
    prisma.$disconnect();
  });
