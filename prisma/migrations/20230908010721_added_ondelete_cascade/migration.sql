-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_workId_fkey";

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_workId_fkey" FOREIGN KEY ("workId") REFERENCES "Work"("id") ON DELETE CASCADE ON UPDATE CASCADE;
