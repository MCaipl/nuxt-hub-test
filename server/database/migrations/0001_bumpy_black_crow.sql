CREATE TABLE `acts` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_items` (
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
INSERT INTO `__new_items`("id", "name", "description", "item_slot_id", "act_id", "created_at") SELECT "id", "name", "description", "item_slot_id", "act_id", "created_at" FROM `items`;--> statement-breakpoint
DROP TABLE `items`;--> statement-breakpoint
ALTER TABLE `__new_items` RENAME TO `items`;--> statement-breakpoint
PRAGMA foreign_keys=ON;