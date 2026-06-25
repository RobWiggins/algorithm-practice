# Write your MySQL query statement below

SELECT 
  c.name as Customers
FROM Customers c
LEFT JOIN Orders o
  ON c.id = o.customerId
  GROUP BY c.id, c.name
  HAVING COUNT(o.customerId) = 0;
