PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_build_levels` (
	`id` integer PRIMARY KEY NOT NULL,
	`build_id` integer NOT NULL,
	`level` integer NOT NULL,
	`archetype_id` integer NOT NULL,
	`talent_id` integer NOT NULL,
	`additional_talent_id` integer,
	`created_at` integer NOT NULL,
	FOREIGN KEY (`build_id`) REFERENCES `builds`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`archetype_id`) REFERENCES `groups`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`talent_id`) REFERENCES `talents`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`additional_talent_id`) REFERENCES `talents`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_build_levels`("id", "build_id", "level", "archetype_id", "talent_id", "additional_talent_id", "created_at") SELECT "id", "build_id", "level", "archetype_id", "talent_id", "additional_talent_id", "created_at" FROM `build_levels`;--> statement-breakpoint
DROP TABLE `build_levels`;--> statement-breakpoint
ALTER TABLE `__new_build_levels` RENAME TO `build_levels`;--> statement-breakpoint
PRAGMA foreign_keys=ON;