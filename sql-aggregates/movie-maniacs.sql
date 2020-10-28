select "customers"."firstName" as "firstName",
       "customers"."lastName" as "lastName",
    sum("payments"."amount") as "totalSpent"
   from "payments"
   join "customers" using ("customerId")
   group by "customers"."customerId"
   order by "totalSpent" desc
