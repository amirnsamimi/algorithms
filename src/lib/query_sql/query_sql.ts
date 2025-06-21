export const getMostSpendUsers = () => {
  console.log(`SELECT 
  u.id,
  u.name,
  SUM(o.total_price) AS total_spent
FROM users u
JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name
ORDER BY total_spent DESC
LIMIT 5;`);
};

export const getOrderAvgIn2023 = () => {
  console.log(`SELECT 
  TO_CHAR(created_at, 'YYYY-MM') AS month,
  ROUND(AVG(total_price), 2) AS average_order_price
FROM orders
WHERE created_at >= '2023-01-01' AND created_at < '2024-01-01'
GROUP BY TO_CHAR(created_at, 'YYYY-MM')
ORDER BY month;`);
};

export const getUsersWithoutOrder = () => {
  console.log(`SELECT 
  u.id,
  u.name
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE o.id IS NULL;`);
};
