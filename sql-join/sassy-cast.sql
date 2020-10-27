select "firstName",
       "lastName",
       "films"."title" as "film"
  from "castMembers"
  join "actors" using ("actorId")
  join "films" using ("filmId")
  where "title" = 'Jersey Sassy';
