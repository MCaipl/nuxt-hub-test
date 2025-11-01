CREATE TABLE `acts` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `companions` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`smallPortait` text NOT NULL,
	`origin_id` integer NOT NULL,
	FOREIGN KEY (`origin_id`) REFERENCES `groups`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `groups` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `item_slots` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `items` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL,
	`item_slot_id` integer NOT NULL,
	`act_id` integer NOT NULL,
	`created_at` integer NOT NULL,
	FOREIGN KEY (`item_slot_id`) REFERENCES `item_slots`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`act_id`) REFERENCES `acts`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `talents` (
	`id` integer PRIMARY KEY NOT NULL,
	`group_id` integer NOT NULL,
	`name` text NOT NULL,
	`description` text DEFAULT '',
	FOREIGN KEY (`group_id`) REFERENCES `groups`(`id`) ON UPDATE no action ON DELETE no action
);
