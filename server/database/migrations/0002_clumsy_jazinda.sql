CREATE TABLE `groups` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `talents` (
	`id` integer PRIMARY KEY NOT NULL,
	`group_id` integer NOT NULL,
	`name` text NOT NULL,
	`description` text DEFAULT '',
	FOREIGN KEY (`group_id`) REFERENCES `groups`(`id`) ON UPDATE no action ON DELETE no action
);
