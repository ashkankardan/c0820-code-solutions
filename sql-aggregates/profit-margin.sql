with "cte_totalRevenue" as (
  select "films"."title" as "title",
      sum("payments"."amount") as "totalRevenue"
  from "payments"
  join "rentals" using ("rentalId")
  join "inventory" using ("inventoryId")
  join "films" using ("filmId")
  group by "films"."title"
  order by "title"
),
  "cte_totalCost" as (
select "films"."title" as "title",
    sum("films"."replacementCost") as "totalCost"
  from "inventory"
  join "films" using ("filmId")
  group by "title"
  order by "title"
),
"cte_totalProfit" as (
select "title",
       "totalRevenue",
       "totalCost",
       ("totalRevenue" - "totalCost") as "profit"
from "cte_totalRevenue"
join "cte_totalCost" using ("title")
)

select "title", "profit"
from "cte_totalProfit"
order by "profit" desc
limit 5;
