# 📘 hello-prisma (TypeScript + Prisma + PostgreSQL)

A simple **TypeScript + Prisma + PostgreSQL** setup demonstrating full **CRUD operations**, including filtering, sorting, and searching.

---

## ⚙️ 1️⃣ Setup Steps

### Step 1 — Initialize Project

```bash
mkdir hello-prisma
cd hello-prisma
npm init -y
npm install prisma @prisma/client typescript ts-node @types/node
npx prisma init
npx tsc --init
```

---

### Step 2 — Configure `.env`

In your `.env` file:

```
DATABASE_URL="postgresql://postgres:password@localhost:5432/hello_prisma?schema=public"
```

---

### Step 3 — Prisma Schema

Edit `prisma/schema.prisma`:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  age       Int
  createdAt DateTime @default(now())
}
```

---

### Step 4 — Migrate & Generate Client

```bash
npx prisma migrate dev --name init
npx prisma generate
```

---

### Step 5 — Create `src/index.ts`

```ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// 1️⃣ Create
async function createUser() {
  const user = await prisma.user.create({
    data: {
      name: "MD Nayeem Miah",
      email: "nayeem@example.com",
      age: 22,
    },
  });
  console.log("Created:", user);
}

// 2️⃣ findMany
async function findAllUsers() {
  const users = await prisma.user.findMany();
  console.log("All Users:", users);
}

// 3️⃣ findUnique
async function findUniqueUser() {
  const user = await prisma.user.findUnique({
    where: { id: 1 },
  });
  console.log("Single User:", user);
}

// 4️⃣ findUniqueOrThrow
async function findUniqueOrThrowUser() {
  const user = await prisma.user.findUniqueOrThrow({
    where: { id: 1 },
  });
  console.log("Found (or throws):", user);
}

// 5️⃣ update
async function updateUser() {
  const updated = await prisma.user.update({
    where: { id: 1 },
    data: { name: "Nayeem Updated" },
  });
  console.log("Updated:", updated);
}

// 6️⃣ updateMany
async function updateManyUsers() {
  const result = await prisma.user.updateMany({
    where: { age: { lt: 25 } },
    data: { age: 25 },
  });
  console.log("Updated Many:", result);
}

// 7️⃣ updateManyAndReturn
async function updateManyAndReturn() {
  await prisma.user.updateMany({
    where: { age: { lt: 30 } },
    data: { age: 30 },
  });

  const updatedUsers = await prisma.user.findMany({
    where: { age: 30 },
  });
  console.log("Updated Users:", updatedUsers);
}

// 8️⃣ delete
async function deleteUser() {
  const deleted = await prisma.user.delete({
    where: { id: 1 },
  });
  console.log("Deleted:", deleted);
}

// 9️⃣ deleteMany
async function deleteManyUsers() {
  const result = await prisma.user.deleteMany({
    where: { age: { gt: 30 } },
  });
  console.log("Deleted Many:", result);
}

// 🔍 Filtering, Sorting, Searching
async function filterSortSearch() {
  const result = await prisma.user.findMany({
    where: {
      age: { gte: 20 },
      name: { contains: "nayeem", mode: "insensitive" },
    },
    orderBy: { createdAt: "desc" },
  });
  console.log("Filtered, Sorted, and Searched:", result);
}

// 🧠 Run
async function main() {
  await createUser();
  await findAllUsers();
  await filterSortSearch();
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
```

---

### Step 6 — Run in TypeScript

```bash
npx ts-node src/index.ts
```

or
if using Bun:

```bash
bun ts-node src/index.ts
```

---

## 🔍 Filtering, Sorting, and Searching

| Feature | Example                                                        |
| ------- | -------------------------------------------------------------- |
| Filter  | `where: { age: { gt: 20 } }`                                   |
| Sort    | `orderBy: { createdAt: "desc" }`                               |
| Search  | `where: { name: { contains: "nayeem", mode: "insensitive" } }` |
| Combine | Use both `where` + `orderBy`                                   |

Example:

```ts
const users = await prisma.user.findMany({
  where: { age: { gte: 18 } },
  orderBy: { name: "asc" },
});
```

---

## 🧩 Prisma Commands

| Command                    | Description         |
| -------------------------- | ------------------- |
| `npx prisma init`          | Initialize Prisma   |
| `npx prisma migrate dev`   | Run migrations      |
| `npx prisma generate`      | Generate client     |
| `npx prisma studio`        | Open Prisma Studio  |
| `npx ts-node src/index.ts` | Run TypeScript code |

---

## 🧠 Summary

✅ Full CRUD operations
✅ Prisma Client + PostgreSQL
✅ Type-safe TypeScript code
✅ Filtering, sorting, and searching
✅ Ready for REST API integration
