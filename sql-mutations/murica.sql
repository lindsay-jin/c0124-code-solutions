update "countries"
set "name" = 'Murica'
where "name" = 'Unites States'
returning *;
