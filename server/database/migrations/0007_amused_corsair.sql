CREATE TABLE `build_levels` (
	`id` integer PRIMARY KEY NOT NULL,
	`build_id` integer NOT NULL,
	`level` integer NOT NULL,
	`talent_id` integer,
	`created_at` integer NOT NULL,
	FOREIGN KEY (`build_id`) REFERENCES `builds`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`talent_id`) REFERENCES `talents`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `builds` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text DEFAULT '',
	`companion_id` integer NOT NULL,
	`created_at` integer NOT NULL,
	FOREIGN KEY (`companion_id`) REFERENCES `companions`(`id`) ON UPDATE no action ON DELETE no action
);
