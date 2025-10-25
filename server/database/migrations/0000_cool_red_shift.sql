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
	FOREIGN KEY (`act_id`) REFERENCES `item_slots`(`id`) ON UPDATE no action ON DELETE no action
);
