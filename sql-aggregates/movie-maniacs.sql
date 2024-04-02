-- List the first and last name of all customers, plus the total amount they've spent on rentals. Order them by total paid, descending.
-- Hint: You need to group the customer rows together and sum up their rental amounts.
-- Hint: Karl Seal should be first with $221.55 paid.

select "firstName", "lastName",
sum("amount") as "totalAmount"
from "customers"
join "rentals" using ("customerId")
join "payments" using ("rentalId")
group by "customers"."customerId"
order by "totalAmount" desc
