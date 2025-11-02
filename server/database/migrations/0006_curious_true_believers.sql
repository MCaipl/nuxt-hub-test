CREATE TABLE `talent_types` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE `talents` ADD `talent_type_id` integer NOT NULL REFERENCES talent_types(id);