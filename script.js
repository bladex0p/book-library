



document.getElementById("addBookForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const bookName = document.getElementById("book-name").value;
    const bookPrice = document.getElementById("book-price").value;
    const bookImage = document.getElementById("image-upload").files[0];
  
    const bookDiv = document.createElement("div");

    bookDiv.classList.add("book-item");
  
    const img = document.createElement("img");

    img.src = URL.createObjectURL(bookImage);
    img.alt = bookName;
    img.style.width = "100%";
  
    const nameParagraph = document.createElement("p");

    nameParagraph.textContent = "Name: " + bookName;

  
    const priceParagraph = document.createElement("p");

    priceParagraph.textContent = "Price: $" + bookPrice;
  
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");
    removeButton.onclick = function() {
      bookDiv.remove();
    };
  
    bookDiv.appendChild(img);
    bookDiv.appendChild(nameParagraph);
    bookDiv.appendChild(priceParagraph);
    bookDiv.appendChild(removeButton);
  
    document.getElementById("bookContainer").appendChild(bookDiv);
  
    document.getElementById("addBookForm").reset();

    
  });
  