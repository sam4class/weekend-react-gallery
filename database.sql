DATABASE "react_gallery"

CREATE TABLE gallery (
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR(300) NOT NULL,
    "description" VARCHAR(200) NOT NULL,
    "likes" INTEGER
);

INSERT INTO "gallery" 
("path", "description", "likes")
VALUES
('/images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park', 0),
('images/smallbike.jpg', 'Bike on Grass', 0),
('images/blueberryIsland1.jpg', 'Canada Camping looking at a lake with a small island', 0)