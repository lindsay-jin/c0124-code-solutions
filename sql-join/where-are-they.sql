-- Generate a list of all addresses in the system that includes their "line1", "cities"."name", and "district".
-- Bragging rights if you get the name of the country in there too (which requires an extra join).
select "line1", "cities"."name", "district", "countries"."name"
from "addresses"
join "cities" using ("cityId")
join "countries" using ("countryId");
