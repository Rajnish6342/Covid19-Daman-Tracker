class UI {
    
  
    paint(res) {
      var current = document.getElementById('current');
      var total = document.getElementById('total');
      var recover = document.getElementById('recover');
      var death = document.getElementById('death');
     current.textContent = res["Dadra and Nagar Haveli and Daman and Diu"].districtData.Daman.active;
      total.textContent = res["Dadra and Nagar Haveli and Daman and Diu"].districtData.Daman.confirmed;
      recover.textContent = res["Dadra and Nagar Haveli and Daman and Diu"].districtData.Daman.recovered;
      death.textContent = res["Dadra and Nagar Haveli and Daman and Diu"].districtData.Daman.deceased;
      
    }
  }