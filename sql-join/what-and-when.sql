select "title",
       "categories"."name" as "category",
       "releaseYear"
  from "filmCategory"
  join "films" using ("filmId")
  join "categories" using ("categoryId")
  where "title" = 'Boogie Amelie';
