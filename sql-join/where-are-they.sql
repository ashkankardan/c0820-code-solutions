select "line1",
       "district",
       "cities"."name" as "city",
       "countries"."name" as "country"
  from "addresses",
       "cities"
  join "countries" using ("countryId");