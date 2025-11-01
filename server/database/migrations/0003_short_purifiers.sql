PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_companions` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`smallPortait` text NOT NULL,
	`origin_id` integer NOT NULL,
	`homeworld_id` integer NOT NULL,
	`starter_level` integer NOT NULL,
	`created_at` integer NOT NULL,
	FOREIGN KEY (`origin_id`) REFERENCES `groups`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`homeworld_id`) REFERENCES `groups`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`homeworld_id`) REFERENCES `acts`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_companions`("id", "name", "smallPortait", "origin_id", "homeworld_id", "starter_level", "created_at") SELECT "id", "name", "smallPortait", "origin_id", "homeworld_id", "starter_level", "created_at" FROM `companions`;--> statement-breakpoint
DROP TABLE `companions`;--> statement-breakpoint
ALTER TABLE `__new_companions` RENAME TO `companions`;--> statement-breakpoint
PRAGMA foreign_keys=ON;