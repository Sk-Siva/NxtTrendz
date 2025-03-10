# **NXTTrendz - An E-commerce Application**  

---

## **📌 About the Project**  
NXTTrendz is a modern e-commerce application built with **React** and **React Router**. It allows users to browse products, add them to their cart, and manage their purchases efficiently. The app ensures authenticated access to the cart and provides a seamless shopping experience.  

---

## **🚀 Features**  

### **🔒 Authentication & Routing**  
- If an **unauthenticated user** tries to access the **Cart Route**, they are redirected to the **Login Route**.  

### **🛒 Cart Management**  

#### **✅ Feature 1: Preventing Duplicate Products in Cart**  
- If a user adds the **same product multiple times**, the **quantity updates** instead of adding a new entry.  
- The **cart count in the header remains unchanged**.  

#### **✅ Feature 2: Displaying Cart Summary**  
- The **total amount** and **number of items** in the cart are displayed in the **Cart Route**.  

#### **✅ Feature 3: Managing Cart Item Quantities**  
- Clicking **➕ (plus icon)** **increases** the product quantity by 1.  
- Clicking **➖ (minus icon)** **decreases** the product quantity by 1.  
- If the product quantity is **1** and the minus icon is clicked, the product is **removed** from the cart.  
- The **total cost dynamically updates** based on the product quantity.  

#### **✅ Feature 4: Removing Individual Cart Items**  
- Users can **remove a product** from the cart using the **Remove** button.  

#### **✅ Feature 5: Removing All Items**  
- Clicking **Remove All** clears the entire cart and displays the **Empty Cart View**.  

---
