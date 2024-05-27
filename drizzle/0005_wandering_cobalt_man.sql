ALTER TABLE "boards" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "boards" ADD COLUMN "created_at" timestamp with time zone DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "boards" ADD COLUMN "updated_at" timestamp with time zone DEFAULT now() NOT NULL;