// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import 'bootstrap/dist/js/bootstrap';

Rails.start()
Turbolinks.start()
ActiveStorage.start()
document.addEventListener('turbolinks:load', () => {
  const search = document.getElementById('language-search');
  const tableRows = document.querySelectorAll('#language-tbody tr');

  const filterTableRows = (e) => {
    const value = e.target.value.toLowerCase();
    for (const tr of tableRows) {
      const isVisible = tr.textContent.toLowerCase().includes(value);
      tr.style.display = isVisible ? '' : 'none';
    }
  };

  search.addEventListener('input', filterTableRows);
});
