(()=>{(() => {
    $el("x-input", [], (el) => {
        var xValid = $state(true);
        Object.defineProperties(el, {
            value: {
                get: () => {
                    return el.querySelector('input')?.value;
                },
                set: (v) => {
                    el.querySelector('input').value = v;
                }
            },
            setType: {
                value: (t) => {
                    if (t && ['text', 'password', 'email', 'number', 'search', 'tel'].includes(r)) el.querySelector('input')?.setAttribute('type', t);
                },
                writable: false
            },
            valid: {
                get: () => {
                    return xValid.val;
                },
                set: (v) => {
                    if([true, false].includes(v)) xValid.val = v;
                }
            },
            checkValid: {
                value: () => {
                    return xValid.val;
                },
                writable: false
            },
            setReadOnly: {
                value: (r) => {
                    if (r && [true, false].includes(r)) {
                        if (r) {
                            el.querySelector('input')?.setAttribute('readonly', 'true');
                        } else {
                            el.querySelector('input')?.removeAttribute('readonly');
                        }
                    }
                },
                writable: false
            },
            setDisable: {
                value: (d) => {
                    if (d && [true, false].includes(d)){
                        if (r) {
                            el.querySelector('input')?.setAttribute('disabled', 'true');
                        } else {
                            el.querySelector('input')?.removeAttribute('disabled');
                        }
                    }
                },
                writable: false
            },
            setIcon: {
                // value: (i) => {
                //     if (i && isJsonObject(i)) {
                //         tIcon.val = JSON.stringify(i);
                //         if (svgTag) {
                //             // Set lại svgTag
                //             svgTag.remove();
                //             setSvgTag()
                //         } else {
                //             setSvgTag()
                //         }
                //     }
                // },
                // writable: false
            },
            setError: {
                // value: (e) => {
                //     if (e && isJsonObject(e)) {
                //         tError.val = JSON.stringify(i);
                //     }
                // },
                // writable: false
            },
            setHelper: {
                // value: (h) => {
                //     if (h) tHelp.val = h;
                // },
                // writable: false
            }
        });
        render(el);
    }, (el, name, valNew, valOld) => {
        // if (name == "t-options" && valOld) {
        //     render(el);
        // }
    });

    function render(el) {
        var o = el.options();
        var icon = el.getAttribute('data-icon');
        var helper = el.getAttribute('data-helper');
        var pattern = el.getAttribute('data-pattern');
        var patterns = [];
        if (pattern && isJsonArray(parseJSON(pattern))) {
            patterns = parseJSON(pattern);
        }
        if(patterns.length > 0) el.valid = false;
        o.class = o.class || ['mih2.5rem', 'w100%', 'oli{none}', 'bd{1px;solid;#4D4F5C}', 'bda0.25rem', 'c{#4D4F5C}', 'p{.45rem;1rem}', 'fns--fs-s'];
        if (!Array.isArray(o.class)) {
            o.class = o.class.split(" ");
        }
        o.class = o.class.join(" ");
        if (icon && isJsonObject(parseJSON(icon))) {
            var ic = parseJSON(icon);
            var i = `<x-svg t-options="${(ic.name ? "name:'" + ic.name + "'": '') + (ic.fill ? ",fill:'" + ic.fill + "'" : '') + (ic.width ? ",width:'" + ic.width + "'": '') + (ic.height ? ",height:'" + ic.height + "'" : '')}" class="dB wFc posA r0.5rem"></x-svg>`;
        }
        
        if(helper && isJsonObject(parseJSON(helper))){
            let hp = parseJSON(helper);
            var h = `<div name="helper" class="c{#4D4F5C80} fns--fs-s ${hp.hidden && hp.hidden == true ? 'dN' : ''}">${hp.text}</div>`;
        }
        el.innerHTML = `
        <div class="dF fxdC gap0.5rem">
            <div class="posR dF aiC">
                <input ${Object.keys(o).map(k => `${k}="${o[k]}"`).join(" ")}>
                ${i?? ''}
            </div>
            ${h?? ''}
        </div>`;
        let input = el.querySelector('input');
        let iconTag = el.querySelector('x-svg');
        let helperTag = el.querySelector('div[name="helper"]');
        if(input){
            input.oninput = e => {
                el.value = e.target.value;
                el.dispatchEvent(new Event("input"))
            }
            input.onchange = e => {
                el.value = e.target.value;
                if(patterns.length > 0){
                    let checkPattern = {success:true, text: ''};
                    const regexList = patterns.map(({ pattern, text }) => ({
                        regex: new RegExp(pattern),
                        text
                    }));
                    for(let item of regexList){
                        if (!item.regex.test(e.target.value)) {
                            checkPattern.success = false;
                            checkPattern.text = item.text;
                            break;
                        }
                    }
                    input.classList.toggle('bd{1px;solid;#4D4F5C}', checkPattern.success);
                    input.classList.toggle('bd!{1px;solid;#FF6565}', !checkPattern.success);
                    if(helperTag){
                        if(checkPattern.text) helperTag.innerHTML = checkPattern.text;
                        helperTag.classList.toggle('dN', checkPattern.success);
                        helperTag.classList.toggle('c!{#FF6565}', !checkPattern.success)
                    }
                    el.valid = checkPattern.success;
                  console.log('input 1');
                }
               console.log('input 2');
                el.dispatchEvent(new Event("change"));
            }
        } 
        if(iconTag && ic.toggle && ic.toggle == 'password'){
            iconTag.addEventListener('click', function(event){
                let typeInput = input.getAttribute('type');
                if(typeInput == 'password'){
                    input.setAttribute('type', 'text');
                    iconTag.changeName('visibility_off');
                }else if(typeInput == 'text'){
                    input.setAttribute('type', 'password');
                    iconTag.changeName('visibility');
                }
            })
        }
    }

    function isJsonObject(value) {
        return value !== null && typeof value === 'object' && !Array.isArray(value);
    }

    function isJsonArray(value) {
        return value !== null && typeof value === 'object' && Array.isArray(value);
    }

    function parseJSON(str) {
        try {
            return JSON.parse(str);  // Nếu JSON.parse không ném lỗi, chuỗi hợp lệ
        } catch (e) {
            return null; // Nếu JSON.parse ném lỗi, chuỗi không hợp lệ
        }
    }
})()})();(()=>{(() => {
  $el("x-button", [], (el) => {
    render(el);
  }, (el, name, valNew, valOld) => {
    if (name == "t-options" && valOld) {
      render(el);
    }
  });
  function render(el) {
    var o = el.options() || {};
    var icon = el.getAttribute('data-icon');
    o.class = (o.class || ['cr', 'flt{brightness(90%);contrast(200%)}@:hover', 'td', 'wFc', 'dF', 'aiC', 'gap2rem', 'xs:px{1.5rem}', 'p{0.8rem;3.3rem}', 'fns--fs-m', 'bg{var(--c-lgreen)}', 'c!{#043C39}', 'bda1.5625rem', 'bd!N']);
    if (!Array.isArray(o.class)) {
      o.class = o.class.split(" ").filter(f => f);
    }
    if(o.disabled || o.disabled == 'true') {
      o.class.push('peN');
      o.class.push('opc0.8');
    } 
    o.class = o.class.join(" ");
    var s = ``;
    if (icon && isJsonObject(parseJSON(icon))) {
      s = `<x-svg t-options='${icon}'></x-svg>`;
    }
    el.innerHTML = `<a ${Object.keys(o).map(k => `${k}="${o[k]}"`).join(" ")}>${s} ${o.title}</a>`
  }

  function isJsonObject(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  }

  function parseJSON(str) {
    try {
      return JSON.parse(str);
    } catch (e) {
      return null;
    }
  }

})()})();(()=>{$el("x-link", [], (el) => {
        render(el);
    }, (el, name, valNew, valOld) => {
        if (name === "t-options" && valOld) {
            render(el);
        }
    });

    function render(el) {
        const o = el.options();
      	o.class = o.class || ['dF aiC py18px pl48px ml25px@>span'];
        if (!Array.isArray(o.class)) {
              o.class = o.class.split(" ");
          }
        o.class = o.class.join(" ");
      //
        const icon = el.getAttribute('data-icon');
        const isActive = el.getAttribute('data-active') === 'current';
        let s = '';

        // Xử lý biểu tượng
        if (icon && isJsonObject(parseJSON(icon))) {
            s = `<x-svg t-options='${icon}'></x-svg>`;
        }

        // Kiểm tra nếu có `subicon`
        if (o.subicon === 'true') {
            el.innerHTML = `
                <button class="bdN w100% ${isActive ? 'current' : ''}">
                    <a class="dF aiC py18px 2pl20px ml25px@>span" href="${o.link}">
                        <x-svg class="dB wFc" t-options="name:'arrow_right', fill:'#4D565C', width:'30px'"></x-svg>
                        ${s} 
                        <span class="fns1rem">${o.title}</span>
                    </a>
                </button>
            `;
        } else {
            el.innerHTML = `
                <button class="bdN w100% ${isActive ? 'current' : ''}">
                    <a class="dF aiC py18px pl48px ml25px@>span fns1rem" href="${o.link}">
                        ${s}
                        <span class="fns1rem">${o.title}</span>
                    </a>
                </button>
            `;
        }
    }

    function isJsonObject(value) {
        return value !== null && typeof value === 'object' && !Array.isArray(value);
    }

    function parseJSON(str) {
        try {
            return JSON.parse(str);
        } catch (e) {
            return null;
        }
    }})();(()=>{(() => {
    $el("x-combo", ["data-options"], (el) => {
      var xValue = $state();
      var xOptions = $state([]);
      el.selectedValues = new Set();
      var xValid = $state(true);
      Object.defineProperties(el, {
          value: {
              get: () => {
                  return xValue.val;
              },
              set: (v) => {
                  let o = el.options();
                  xValue.val = v;
                  if(o.require && o.require == true){
                      var helperTag = el.querySelector('div[name="helper"]');
                      let container = el.querySelector('div[name="combobox-container"]');
                      if(!helperTag){
                          container.insertAdjacentHTML('afterEnd',`<div name="helper" class="c!{#FF6565} fns--fs-s dN">Vui lòng chọn giá trị</div>`);
                          helperTag = el.querySelector('div[name="helper"]');
                      }
                      var check_value = !v || (['string', 'object'].includes(typeof(v)) && v.length == 0);
                      // Check giá trị ko được trống
                      // Thêm border 
                      container.classList.toggle('bd!{1px;solid;#FF6565}', check_value);
                      // Thêm helper
                      helperTag.classList.toggle('c!{#FF6565}', check_value);
                      helperTag.classList.toggle('dN', !check_value);
                      el.valid = !check_value;
                  }
                setTimeout(() =>{
                  el.dispatchEvent(new Event("change"));
                }, 10)
              },
              configurable: true
          },
          valid: {
              get: () => {
                  return xValid.val;
              },
              set: (v) => {
                  if([true, false].includes(v)) xValid.val = v;
              },
              configurable: true
          },
          selectedText: {
              value: () => {
                  return Array.from(el.selectedValues);
              },
              writable: false
          },
          setValue:{
              value: (v, isChange = true) => {
                  xValue.val = v;
                  if(isChange) changeValue(el, el.selectedValues);
              },
              writable: false
          },
          getDataOption: {
              value: () => {
                  return xOptions.val;
              },
              writable: false
          },
          setDataOption: {
              value: (o) => {
                  if(Array.isArray(o) && o.length > 0){
                      xOptions.val = o;
                  }
              },
              writable: false
          },
          setReadOnly: {
              // value: (r) => {
              //     if (r && [true, false].includes(r)) {
              //         if (r) {
              //             el.querySelector('input')?.setAttribute('readonly', 'true');
              //         } else {
              //             el.querySelector('input')?.removeAttribute('readonly');
              //         }
              //     }
              // },
              // writable: false
          },
          setDisable: {
              // value: (d) => {
              //     if (d && [true, false].includes(d)){
              //         if (r) {
              //             el.querySelector('input')?.setAttribute('disabled', 'true');
              //         } else {
              //             el.querySelector('input')?.removeAttribute('disabled');
              //         }
              //     }
              // },
              // writable: false
          },
          setHelper: {
              // value: (h) => {
              //     if (h) tHelp.val = h;
              // },
              // writable: false
          }
      });
      render(el, el.selectedValues);
  }, (el, name, valNew, valOld) => {
      if (["t-options", "data-options"].includes(name) && valOld) {
          render(el, el.selectedValues);
      }
  });

  function render(el, selectedValues) {
      let o = el.options();
      o.multiple = o.multiple || false;
      // Giá trị mặc định
      if(o.value){
          el.setValue(o.multiple ? (Array.isArray(o.value) ? o.value : []) : (['object', 'function', 'undefined'].includes(typeof(o.value)) ? '' : o.value), false);
      }else{
          el.setValue(o.multiple ? [] : '', false);
          if(o.require && o.require == true) el.valid = false;
      }
      o.tags = o.tags || false;
      o.allowClear = o.allowClear || false;
      o.suggest = o.suggest || false;
      o.search = o.search || false;
      o.hideClearButton = o.hideClearButton || true;
      o.searchDelay = o.searchDelay || 300;
      let helper = el.getAttribute('data-helper');
      let options = el.getAttribute('data-options');
      let optionString = '';
      o.class = o.class || ['dF', 'aiC', 'gap0.25rem', 'fxw', 'bd{1px;solid;#dee4f0}', 'bda0.375rem', 'p{0.25rem;1rem}', 'posR', 'bd!N;>;label'];
      if (!Array.isArray(o.class)) {
          o.class = o.class.split(" ");
      }
      let mih = o.minHeight ? 'mih' + o.minHeight : 'mih2.5rem';
      o.class.push(mih);
      o.class = o.class.join(" ");
      // Helper
      var h = '';
      if (helper && isJsonObject(parseJSON(helper))) {
          let hp = parseJSON(helper);
          var h = hp.text ? `<div name="helper" class="c{${hp.color ? hp.color : '#FF6565'}} fns--fs-s">${hp.text}</div>` : '';
      }
      // Option list
      if (options && Array.isArray(parseJSON(options))) {
          let listOptions = parseJSON(options);
          if (Array.isArray(listOptions) && listOptions.length > 0) {
              el.setDataOption(listOptions);
              for (let item of listOptions) {
                  let isChoose = false;
                  if(Array.isArray(el.value)){
                      for(let vl of el.value){
                          if(vl == item.value){
                              selectedValues.add(item.label);
                              isChoose = true;
                          } 
                      }
                  }else{
                      if(item.value == el.value){
                          selectedValues.add(item.label);
                          isChoose = true;
                      } 
                  }
                  let checkboxTag = ``;
                  if(item.checkbox && item.checkbox == true){
                      checkboxTag = `<input class="fxs bda0.25rem bgc{var(--c-white)} bd{1px;solid;#cdb5e1} h1em w1em vaT" type="checkbox" ${isChoose ? 'checked' : ''} value="${item.value ?? ''}"/>`;
                  }
                  let iconTag = '';
                  if(item.icon && item.icon.length > 0){
                      iconTag = `<x-svg class="dB bds!N wFc" t-options="name:'${item.icon}',fill:'${item.fill ? item.fill : ""}'"></x-svg>`
                  }
                  //console.log('item.icon && item.icon.length', item);
                  optionString += `
                  <label class="cr dF aiC gap0.5rem ws{normal} bda0.375rem bg{transparent} bg{#E8E9EC}:active bg{#E8E9EC}@:hover wrb{break-work} clr{both} c{#566177} p0.625rem w100% bd!N" data-value="${item.value ?? ''}" data-label="${item.label ?? ''}">
                      ${item.icon && item.icon.length > 0 ? iconTag : checkboxTag}
                      <span class="tolE ofl{hidden} ws{nowrap}">${item.label ?? ''}</span>
                  </label>`;
              }
          }
      }
      let allowClear = '';
      if (o.allowClear) {
          allowClear = `<x-svg class="dB bds!N wFc posA r{0.5rem} cr bxshd{0px;4px;12px;#3333331f}@:hover d!N bda50%" t-options="name:'close',fill:'#aabad0', width:18, height: 18" name="clear_select"></x-svg>`;
      }
      let search = '';
      if (o.suggest) {

      } else if (o.search) {
          search = `<div class="dF aiC bd!N bdb!{1px;solid;#ddd}">
                      <input type="text" placeholder="Search..." class="bd!N oli{none} dB fns0.875rem mih2rem w100% px{0.625rem}" name="search">
                      <x-svg class="dB wFc posA r{1rem} opc0.8 opc1@:hover cr bxshd{0px;4px;12px;#3333331f}@:hover bda50% d!N" t-options="name:'close',fill:'#aabad0', width:18, height:18" name="clear_search"></x-svg>
                  </div>`
      }
      el.innerHTML = `
      <div class="dF fxdC gap1rem bxsz{'border-box'}">
          <div class="${o.class}" name='combobox-container'>
              <div class="dF fxdC fx1">
                  <input class="bg{var(--c-white)} c{var(--c-black)} bdN oli{none} dB fns0.875rem w100% pr0.875rem bd!N cr ${mih}" ${o.suggest ? '' : 'readonly'} name="filter" autocomplete="off" placeholder="${o.placeholder ?? ''}"/>
                  <div class="bxshd{0px;4px;12px;#3333331f} mt0.25rem bgc{var(--c-white)} miw100% bda0.375rem fns0.875rem posA taL z{1000} t100% l0 bd!N mh{calc(100vh;/;1.5)} ofly{auto} sbw{thin} dN" name="dropdown">
                      ${search}
                      ${optionString}
                      <div class="dF aiC d!N p{0.5rem;1rem}" name="no-result">Không có kết quả nào được tìm thấy</div>
                  </div>
              </div>
              ${allowClear}
              <x-svg class="dB bds!N wFc posA r{0.5rem} cr" t-options="name:'arrow_drop_down',fill:'#4D4F5C', width:18, height:18" name="arrow"></x-svg>
          </div>
          ${h}
      </div>`;
      let input = el.querySelector('input[name="filter"]');
      let icon = el.querySelector('x-svg[name="arrow"]');
      let dropdown = el.querySelector('div[name="dropdown"]');
      let container = el.querySelector('div[name="combobox-container"]');
      let listLabel = dropdown.getElementsByTagName('label');
      let clearSelect = el.querySelector('x-svg[name="clear_select"]');
      let searchEl = el.querySelector('input[name="search"]')
      let activeIndex = -1; // Khởi tạo chỉ số của thẻ lable đang được active
      if (listLabel.length > 0) {
          let to;
          for (let item of listLabel) {
              item.addEventListener('click', function(event){
                  if(to) clearTimeout(to);
                  to = setTimeout(()=>{   
                      selectOption(o, this, el, container, listLabel, input, dropdown, icon, selectedValues, o.allowClear, clearSelect);
                  }, 1);
                  event.stopPropagation();
              });
          }
      }
      if (clearSelect){
          clearSelect.onclick = evt =>{
              if(Array.isArray(el.value)){
                  el.value.length = 0;
                  el.value = [];
                  // Xóa dom
                  if(o.allowClearItem){
                      let listSpan = container.querySelectorAll('span[name2="option-allow-clear"]');
                      if(listSpan && listSpan.length > 0){
                          for(let item of listSpan){
                              item.remove();
                          }
                      }
                  }else{
                      input.value = '';
                  }
              }else{
                  el.value = '';
                  // Xóa dom
                  input.value = '';
              }
              selectedValues.clear();
              setPlaceholderInput(selectedValues, input, o);
              // Xóa dropdown
              for (let item of listLabel) {
                  if(item.querySelector('input[type="checkbox"]')) item.querySelector('input[type="checkbox"]').checked = false;
              }
              clearSelect.classList.toggle('d!N', true);
          }
      }
      if (input) {
          input.oninput = evt => {
              filterResultDropdown(evt.target, listLabel, dropdown, o.multiple, o.allowClearItem, el, selectedValues);
              if(o.suggest && !o.allowClearItem){
                  if(dropdown.classList.contains('dN')) toggleDropdow(dropdown, icon);
              }
          }
          input.onclick = e => {
              resetListLabel(listLabel, dropdown);
              if(!(o.suggest && !o.allowClearItem)) toggleDropdow(dropdown, icon);
          }
          input.onkeyup = evt => {
              if (['Tab', 'Enter', 'ArrowDown', 'ArrowUp', 'Escape'].includes(evt.key)) {
                  evt.stopPropagation();
                  switch (evt.key) {
                      case 'Escape':
                          // Ẩn dropdown
                          dropdown.classList.toggle('dN', true);
                          break;
                      case 'Tab':
                      case 'Enter':
                          // Nếu nhấn Enter, lấy thông tin của thẻ li đang active
                          if (activeIndex == -1) {
                              activeIndex = 0;
                          }
                          const activeItem = listLabel[activeIndex];
                          selectOption(o, activeItem, el, container, listLabel, input, dropdown, icon, selectedValues, o.allowClear, clearSelect, true);
                          break;
                      default: break;
                  }
              }
          }
      }
      if (searchEl){
          searchEl.oninput = evt => {
              filterResultDropdown(evt.target, listLabel, dropdown, false, false, el, selectedValues);
          }
      }
      if (icon) {
          icon.onclick = e => {
              toggleDropdow(dropdown, icon);
          }
      }
      if (dropdown) {
          dropdown.onclick = e => {
              e.stopPropagation();
          }
      }
      if (container) {
          container.onkeydown = evt => {
              if (evt.key === 'Tab' || evt.key === 'Enter') {
                  evt.preventDefault();
              }
              if (evt.key === 'ArrowDown' || evt.key === 'ArrowUp') {
                  evt.preventDefault();
                  if (evt.key === 'ArrowDown') {
                      // Di chuyển xuống
                      activeIndex = (activeIndex + 1) % listLabel.length;
                      updateActiveItem(activeIndex, listLabel);
                  }
                  if (evt.key === 'ArrowUp') {
                      // Di chuyển lên
                      activeIndex = (activeIndex - 1 + listLabel.length) % listLabel.length;
                      updateActiveItem(activeIndex, listLabel);
                  }
              }
          }
      }
      if(el.value && el.value.length > 0){
          // Set value ban đầu
          setTextSelect(el, dropdown, listLabel, container, icon, clearSelect, input, selectedValues);
      }
      document.addEventListener('click', function (event) {
          // Nếu phần tử được click không nằm bên trong dropdown, ẩn menu
          if (!event.target.closest('div[name="combobox-container"]')) {
              let dropdown = el.querySelector('div[name="dropdown"]');
              let icon = el.querySelector('x-svg[name="arrow"]');
              dropdown.classList.toggle('dN', true);
              rotateArrow(dropdown, icon);
          }
      });
  }

  function isJsonObject(value) {
      return value !== null && typeof value === 'object' && !Array.isArray(value);
  }

  function parseJSON(str) {
      try {
          return JSON.parse(str);  // Nếu JSON.parse không ném lỗi, chuỗi hợp lệ
      } catch (e) {
          return null; // Nếu JSON.parse ném lỗi, chuỗi không hợp lệ
      }
  }

  function rotateArrow(dropdown, icon) {
      if (dropdown.classList.contains('dN')) {
          icon.classList.toggle('tra{rotate(0deg)}', true)
          icon.classList.toggle('tra{rotate(180deg)}', false)
      } else {
          icon.classList.toggle('tra{rotate(0deg)}', false)
          icon.classList.toggle('tra{rotate(180deg)}', true)
      }
  }

  function toggleDropdow(dropdown, icon) {
      
      if (window.currentlyOpenDropdown && window.currentlyOpenDropdown !== dropdown) {
          window.currentlyOpenDropdown.classList.add('dN');
      }
      dropdown?.classList.toggle('dN');
      var rect = dropdown.getBoundingClientRect();
      // Kiểm tra xem ul có vượt ra ngoài màn hình không, nếu có thì hiển thị ở trên
      if (rect.bottom > window.innerHeight) {
          dropdown.classList.toggle('t100%', false);
          dropdown.classList.toggle('t{-205%}', true);
      }else{
          dropdown.classList.toggle('t100%', true);
          dropdown.classList.toggle('t{-205%}', false);
      }
      rotateArrow(dropdown, icon);
      window.currentlyOpenDropdown = dropdown.classList.contains('dN') ? null : dropdown;
  }

  function resetListLabel(listLabel, dropdown) {
      if (listLabel.length > 0) {
          dropdown.querySelector('div[name="no-result"]').classList.toggle('d!N', true);
          for (let item of listLabel) {
              item.classList.toggle('d!N', false);
              item.classList.toggle('bg!{#E8E9EC}', false)
          }
      }
  }

  // Hàm để cập nhật trạng thái active của các thẻ
  function updateActiveItem(index, listLabel) {
      // Xóa class active khỏi tất cả các thẻ
      if (listLabel.length > 0) {
          for (let item of listLabel) {
              item.classList.toggle('bg!{#E8E9EC}', false)
          }
      }

      // Thêm class active vào thẻ li có chỉ số được truyền vào
      if (index >= 0 && index < listLabel.length) {
          listLabel[index].classList.toggle('bg!{#E8E9EC}', true);
      }
  }

  // Hàm để toggle trạng thái checkbox hoặc giá trị của label
  function toggleSelection(label, el, selectedValues) {
      const checkbox = label.querySelector('input[type="checkbox"]');
      const value = checkbox ? checkbox.value : label.getAttribute('data-value'); // Lấy giá trị
      const labelStr = label.getAttribute('data-label');
      let valueEl = el.value ?? [];
      let chosen = false;
      // Thêm hoặc xóa giá trị trong Set tùy theo trạng thái đã chọn
      if (valueEl.includes(value)) {
          el.value = valueEl.filter(s => s !== value);
      } else {
          el.value = [...el.value, value];
          chosen = true;
      }
      // Thêm hoặc xóa giá trị trong Set tùy theo trạng thái đã chọn
      if (selectedValues.has(labelStr)) {
          selectedValues.delete(labelStr);
      } else {
          selectedValues.add(labelStr);
      }
      return { selectedValues: Array.from(selectedValues), newText: labelStr.trim(), chosen: chosen, newValue: value };
  }

  function addItemAllowClear(value, text, el, selectedValues, container, dropdown, input, options) {
      let { span, "x-svg": x_svg } = $tags;
      let svgTag = x_svg(
          {
              class: 'dB wFc',
              "t-options": 'name:"close", width:16, height:16, fill: "#4D4F5C"',
              "data-value": value,
              onclick: (e) => {
                  // Xóa span
                  container.querySelector(`span[name="options-${value}"]`)?.remove();
                  // Bỏ checkbox
                  if(dropdown.querySelector(`label[data-value="${value}"]`).querySelector('input[type="checkbox"]')) dropdown.querySelector(`label[data-value="${value}"]`).querySelector('input[type="checkbox"]').checked = false;
                  el.value = el.value.filter(s => s !== value);
                  if (selectedValues.has(text)) {
                      selectedValues.delete(text);
                  }
                  setPlaceholderInput(selectedValues, input, options);
              }
          }
      );
      let spanTag = span(
          {
              class: 'dF aiC miw1px c{#4D4F5C} bda0.75rem bd{1px;solid;#E8E9EC} fns0.875rem p{0.25rem;0.5rem} gap0.25rem wrb{break-word}',
              innerText: text,
              name: `options-${value}`,
              name2: 'option-allow-clear'
          },
          svgTag
      )
      return spanTag;
  }

  function selectOption(options, label, el, container, listLabel, input, dropdown, icon, selectedValues, allowClear, clearSelect, isKeyChoose = false) {
      if (options.multiple) {
          // thêm giá trị vào thẻ input
          let labelText = toggleSelection(label, el, selectedValues);
          if (isKeyChoose && label.querySelector(`input[type="checkbox"]`)) {
              label.querySelector(`input[type="checkbox"]`).checked = labelText.chosen;
          }
          if (options.allowClearItem) {
              if (labelText.chosen) {
                  let spanTag = addItemAllowClear(labelText.newValue, labelText.newText, el, selectedValues, container, dropdown, input, options);
                  container.prepend(spanTag);
              } else {
                  el.querySelector(`span[name="options-${labelText.newValue}"]`)?.remove();
              }
          } else {
              input.value = labelText.selectedValues.join(', ');
              // Kiểm tra nếu nội dung trong div vượt quá chiều rộng cho phép
              if (input.scrollWidth > input.clientWidth) {
                  input.value = `Đã chọn (${labelText.selectedValues.length})`;
              }
          }
        //   Đóng dropdown sau khi chọn
          if(options.closeDropdownAfterSelect && options.closeDropdownAfterSelect == '1'){
            dropdown?.classList.toggle('dN', true);
          }
      } else {
          // Xóa all check box
          clearCheckboxDropdown(listLabel);
          selectedValues.clear();
          const checkbox = label.querySelector('input[type="checkbox"]');
          if(checkbox){
              checkbox.checked = true;
          }
          // Set value
          el.value = label.getAttribute('data-value');
          input.value = label.innerText.trim();
          selectedValues.add(label.getAttribute('data-label'));
          // Đóng dropdown
          dropdown?.classList.toggle('dN');
          rotateArrow(dropdown, icon);
      }
      toggleIconClearAll(el.value, allowClear, icon, clearSelect);
      setPlaceholderInput(selectedValues, input, options);
  }

  function filterResultDropdown(target, listLabel, dropdown, multiple, allowClearItem, el, selectedValues){
      let filter = target.value;
      if(multiple && !allowClearItem){
          filter = filter.split(',').map(item => item.trim());
      }
      let noResult = true;
      for (let i = 0; i < listLabel.length; i++) {
          let txtValue = listLabel[i].textContent?.trim() || listLabel[i].innerText?.trim();
          if(Array.isArray(filter)){
               if (filter.some(val => txtValue.toUpperCase().includes(val.toUpperCase()))) {
                  noResult = false
                  listLabel[i].classList.toggle('d!N', false); // Hiển thị nếu chứa chuỗi tìm kiếm
              } else {
                  listLabel[i].classList.toggle('d!N', true); // Ẩn nếu không chứa chuỗi tìm kiếm
              }
              let value = listLabel[i].getAttribute('data-value');
              let text = listLabel[i].getAttribute('data-label');
              // Nếu chuỗi nhập có chứa data-text, thì tự động chọn
              if (filter.some(val => text === val)) {
                  if (!el.value.includes(value)) {
                      el.value = [...el.value,value];
                      selectedValues.add(text);
                      // Check Dropdown
                      if(listLabel[i].querySelector('input[type="checkbox"]')) listLabel[i].querySelector('input[type="checkbox"]').checked = true;
                  }
              } else {
                  if (el.value.includes(value)) {
                      el.value = el.value.filter(val => val !== value);
                      selectedValues.delete(text);
                      if(listLabel[i].querySelector('input[type="checkbox"]')) listLabel[i].querySelector('input[type="checkbox"]').checked = false;
                  }
              }
          }else{
              if (txtValue.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
                  noResult = false
                  listLabel[i].classList.toggle('d!N', false);
              } else {
                  listLabel[i].classList.toggle('d!N', true);
              }
          }
      }
      // Nếu ko có kết quả nào
      if (noResult) {
          dropdown.querySelector('div[name="no-result"]').classList.toggle('d!N', false);
      } else {
          dropdown.querySelector('div[name="no-result"]').classList.toggle('d!N', true);
      }
  }

  function changeValue(el, selectedValues){
      let input = el.querySelector('input[name="filter"]');
      let icon = el.querySelector('x-svg[name="arrow"]');
      let dropdown = el.querySelector('div[name="dropdown"]');
      let container = el.querySelector('div[name="combobox-container"]');
      let listLabel = dropdown?.getElementsByTagName('label');
      let clearSelect = el.querySelector('x-svg[name="clear_select"]');
      // Set text input
      setTextSelect(el, dropdown, listLabel, container, icon, clearSelect, input, selectedValues, true);
  }

  function setTextSelect(el, dropdown, listLabel, container, icon, clearSelect, input, selectedValues, isCheck = false){
      let o = el.options();
      if(o.multiple){
          if(o.allowClearItem){
              // Remove all tag
              let spanTagAll = container.querySelectorAll('span[name2="option-allow-clear"]');
              if(spanTagAll && spanTagAll.length > 0){
                  for(let sp of spanTagAll){
                      sp.remove();
                  }
              }
              if(Array.isArray(el.value) && el.value.length > 0){
                  for(let item of el.value){
                      let labelText = '';
                      for(let tx of el.getDataOption()){
                          if(tx.value == item) {
                              labelText = tx.label;
                              break;
                          }
                      }
                      let spanTag = addItemAllowClear(item, labelText, el, selectedValues, container, dropdown, input, o);
                      container.prepend(spanTag);
                  }
              }
          }else{
              input.value = Array.from(selectedValues).join(', ');
              // Kiểm tra nếu nội dung trong div vượt quá chiều rộng cho phép
              if (input.scrollWidth > input.clientWidth) {
                  input.value = `Đã chọn (${selectedValues.length})`;
              }
          }
          // Check Dropdown
          if(isCheck && Array.isArray(el.value) && el.value.length > 0){
              // Xóa all check box
              clearCheckboxDropdown(listLabel);
              for(let item of el.value){
                  let label = dropdown.querySelector(`label[data-value="${item}"]`);
                  const checkbox = label?.querySelector('input[type="checkbox"]');
                  if(checkbox) checkbox.checked = true;
              }
            }
            // remove placeholder

      }else{
          let label = dropdown.querySelector(`label[data-value="${el.value}"]`);
          if(isCheck){
              // Xóa all check box
              clearCheckboxDropdown(listLabel);
              const checkbox = label?.querySelector('input[type="checkbox"]');
              if(checkbox) checkbox.checked = true;
          }
          input.value = label && label.innerText ? label.innerText.trim() : '';
      }
      toggleIconClearAll(el.value, o.allowClear, icon, clearSelect);
  }

  function clearCheckboxDropdown(listLabel){
      // Xóa all check box
      if(listLabel && listLabel.length > 0){
          for (let element of listLabel) {
              if(element.querySelector('input')) element.querySelector('input').checked = false;
          }
      }
  }

  function toggleIconClearAll(value, allowClear, icon, clearSelect){
      if(allowClear){
          if(value && value.length > 0){
              // Nếu có giá trị
              icon.classList.toggle('d!N', true);
              clearSelect.classList.toggle('d!N', false);
          }else{
              icon.classList.toggle('d!N', false);
              clearSelect.classList.toggle('d!N', true);
          }
      }
  }

  function setPlaceholderInput(selectedValues, input, options){
    if(selectedValues.size == 0) input.setAttribute('placeholder', options.placeholder);
    else input.setAttribute('placeholder', '');
  }
})()})();(()=>{$el("x-combobox",[],(el)=>{
  var o=el.options();
  el.innerHTML=`<select class="oli{none} wF" name="${o.name||""}">
  	<option name=""> ----- </option>
  	<option name="1">Level 1</option>
  	<option name="2">Level 2</option>
  </select>`;
},(el,name,valNew,valOld)=>{
  if(name=="t-options"&&valOld){
    //render(el);
  }
});})();(()=>{(() => {
    $el("x-tree", [], (el) => {
        const xValue = $state();
        const xSelected = $state();
        var tree = $state([]);
        Object.defineProperties(el, {
            value: {
                get: () => {
                    return xValue.val;
                },
                set: (v) => {
                    xValue.val = v;
                },
                configurable: true
            },
            selected:{
                get: () => {
                    return xSelected.val;
                },
                set: (v) => {
                    xSelected.val = v;
                },
                configurable: true
            },
            data: {
                get: () => {
                    return tree.val;
                },
                set: (v) => {
                    if(Array.isArray(v)){
                        tree.val = v;
                    }
                },
                configurable: true
            },
            setData: {
                value: (v, r = false) => {
                    if(Array.isArray(v)){
                        tree.val = v;
                        if([true, false].includes(r) && r == true) render(el);
                    }
                },
                writable: false
            }
        })
        render(el);
    }, (el, name, valNew, valOld) => {
        if (name == "t-options" && valOld) {
            render(el);
        }
    });

    function render(el) {
        var o = el.options();
        if(o.checkbox) el.value = [];
        let data = parseJSON(el.getAttribute('x-data'));
        console.log("options", o)
        if(data && Array.isArray(data) && data.length > 0){
            el.data = data;
        }
        let ulTag = document.createElement('ul');
        ulTag.classList.add('ws{nowrap};li');
		// Build tree
		buildTree(el.data, 0, ulTag, el);
        el.insertAdjacentElement('afterbegin', ulTag);
        if(o && o.editEnable){
            document.addEventListener('click', function (event) {
                // Nếu phần tử được click không nằm bên div tree
                if (!event.target.closest('div[name="tree"]')) {
                    console.log('el', el.selected);
                    if(el.selected){
                        el.querySelector(`div[data-id="${el.selected.id}"] > span[name="tree-name"]`).classList.toggle('dN', false);
                        el.querySelector(`div[data-id="${el.selected.id}"] > input[type="text"]`)?.remove();
                    }
                }
            });
        }
        
	};

    function buildTree(nodes, level, wrapper, el) {
		if (!nodes || (Array.isArray(nodes) && nodes.length == 0)) return;
		level += 1;

        for(let item of nodes){
            addNodes(item, wrapper, level, el);
        }
	}

    function addNodes(node, wrapper, level, el) {
        let o = el.options();
        let isCheck = o.checkbox ? o.checkbox : false;
        let treeItem = document.createElement('li');
        treeItem.setAttribute('data-id', node.id);
        // treeItem.draggable = true; // Kích hoạt tính năng drag
        // Gán các sự kiện drag & drop cho phần tử mới
        // treeItem.addEventListener('dragstart', onDragStart);
        // treeItem.addEventListener('dragover', onDragOver);
        // treeItem.addEventListener('drop', onDrop);
        treeItem.setAttribute('data-level', level);
        let divTag = document.createElement('div');
        divTag.classList.add('dF', 'h1rem', 'ws{nowrap}', 'cr', 'gap0.25rem','bdl{2px;solid;transparent}','mih1.5rem','aiC');
        divTag.setAttribute('name', 'tree');
        divTag.setAttribute('data-id', node.id);
        divTag.setAttribute('data-level', level);
        // Add indent/spacer to mimic tree structure
        for (var i = 0; i < (level - 1); i++) {
            divTag.insertAdjacentHTML('afterbegin', '<span class="dIb w1rem h1rem m{0.25rem;0} va{middle} ofl{hidden}"></span>');
        }
        // Add Arrow
        if (node.childs && node.childs.length > 0) {
            divTag.insertAdjacentHTML('beforeend', `<x-svg class="dB wFc" t-options="name:'arrow_right', width:18, height:18" name="arrow"></x-svg>`);
            // Add Icon
            divTag.insertAdjacentHTML('beforeend', `<x-svg class="dB wFc" t-options="name:'folder',width:18, height:18"></x-svg>`);
            let arrowTag = divTag.querySelector('x-svg[name="arrow"]');
            arrowTag.addEventListener('click', function (evt) {
                evt.stopPropagation();
                let ulTag = evt.target.closest('li').querySelector('ul');
                ulTag.classList.toggle('dN');
                this.classList.toggle('tra{rotate(45deg)}');
            });
        }else{
            divTag.insertAdjacentHTML('beforeend', `<x-svg class="dB wFc" t-options="name:'description',width:16, height:16"></x-svg>`);
        }
        // Hightlight click div
        divTag.addEventListener('click', function (evt) {
            console.log('click', evt.target.tagName);
            if(evt.target.tagName == 'INPUT' && evt.target.name =='tree-edit'){

            }else{
                // Loại bỏ lớp 'highlight' từ các div khác
                el.querySelectorAll('div[name="tree"]').forEach(function(elDiv) {
                    elDiv.classList.remove('bdl{2px;solid;#39c}','bgc{#eee}','c{#39c}');
                    elDiv.classList.toggle('bdl{2px;solid;transparent}', true);
                    if(o && o.editEnable){
                    console.log('abc', divTag.querySelector('input[name="tree-edit"]'));
                    // Xóa tất cả input
                    elDiv.querySelector('span[name="tree-name"]').classList.toggle('dN', false);
                    elDiv.querySelector('input[type="text"]')?.remove();
                    }
                });
                // Thêm lớp 'highlight' vào thẻ div đã nhấn
                this.classList.remove('bdl{2px;solid;transparent}');
                this.classList.add('bdl{2px;solid;#39c}','bgc{#eee}','c{#39c}');
                // Get Id
                let id_div = this.getAttribute('data-id');
                if(!isCheck){
                    el.value = id_div;
                    el.dispatchEvent(new Event("change"));
                } 
                el.selected = findNodeById(id_div, el.data);
                // Add edit   
                if(o && o.editEnable){
                    let inputTag = document.createElement('input');
                    inputTag.type = "text";
                    inputTag.value = node.name;
                    inputTag.name = "tree-edit"
                    divTag.querySelector('span[name="tree-name"]').classList.toggle('dN', true);
                    divTag.insertAdjacentElement('beforeend', inputTag);
                    inputTag.addEventListener('change', function(evt){
                        console.log('inputTag', findNodeById(id_div, el.data));
                        el.dispatchEvent(new CustomEvent("changeNode", { detail:{node_id: id_div, text: this.value}}));
                        divTag.querySelector('span[name="tree-name"]').innerText = this.value;
                    })
                }
            }
        })
        // Add checkbox
        if(o && o.checkbox){
            let checkboxTag = document.createElement('input');
            checkboxTag.type = 'checkbox';
            checkboxTag.value = node.id;
            divTag.insertAdjacentElement('beforeend', checkboxTag);
            checkboxTag.addEventListener('change', function(evt){
                // add check box to data 
                console.log('level', level);
                // Check node con
                let nodeChildLv = el.querySelectorAll(`div[data-level="${level + 1}"]`);
                // Nếu có check all con
                if(nodeChildLv && nodeChildLv.length > 0){
                    for(let item of nodeChildLv){
                        let checkboxTag = item.querySelector('input[type="checkbox"]');
                        checkboxTag.checked = true;
                        if(!el.value.includes(checkboxTag.value)) el.value.push(checkboxTag.value);
                    }
                }
                // Check node lv hiện tại
                let nodeCurrentLv = el.querySelectorAll(`div[data-level="${level}"]`);
                // Nếu all lv hiện tại check thì check node cha
                if(nodeCurrentLv && nodeCurrentLv.length > 0){
                    let allCheck = true;
                    for(let item of nodeCurrentLv){
                        if(item.querySelector('input[type="checkbox"]').checked == false) allCheck = false;
                    }
                    let fatherTag = this.parentNode.parentNode.parentNode.parentNode.querySelector('div[name="tree"] input[type="checkbox"]');
                    if(allCheck == true) {
                        fatherTag.checked = true;
                        if(!el.value.includes(fatherTag.value)) el.value.push(fatherTag.value);
                    }else{
                        fatherTag.checked = false;
                        removePrimitive(el.value, fatherTag.value);

                    }
                }
                if(this.checked){
                    if(!el.value.includes(this.value)) el.value.push(this.value);
                }else{
                    removePrimitive(el.value, this.value);
                }
                el.dispatchEvent(new Event("change"));
            })
        }
        
        // Add Text
        divTag.insertAdjacentHTML('beforeend', `<span class="ws{nowrap}" name="tree-name">${node.name}</span>`);
        treeItem.insertAdjacentElement("afterbegin", divTag);
        // Add item to the tree
        wrapper.insertAdjacentElement("beforeend", treeItem);
        console.log('node', node, node.childs);
        // add child nodes
        if (node.childs && node.childs.length > 0) {
            let ulTag = document.createElement('ul');
            ulTag.classList.add('dN');
            buildTree(node.childs, level, ulTag, el);
            treeItem.insertAdjacentElement("beforeend", ulTag);
        }
    }

    function parseJSON(str) {
        try {
            return JSON.parse(str);  // Nếu JSON.parse không ném lỗi, chuỗi hợp lệ
        } catch (e) {
            return null; // Nếu JSON.parse ném lỗi, chuỗi không hợp lệ
        }
    }

    // Hàm tìm name theo id
    function findNodeById(id, nodes) {
        for (const node of nodes) {
        if (node.id === id) {
            return node; // Nếu tìm thấy id, trả về node
        }
        // Nếu có các nút con, gọi đệ quy để tìm kiếm trong chúng
        if (node.childs && node.childs.length > 0) {
            const foundNode = findNodeById(id, node.childs);
            if (foundNode) {
            return foundNode; // Nếu tìm thấy trong nút con, trả về name
            }
        }
        }
        return null; // Nếu không tìm thấy, trả về null
    }

    function removePrimitive(array, itemToRemove) {
        const index = array.findIndex(element => element === itemToRemove);
        if (index !== -1) {
        array.splice(index, 1); // Xóa phần tử ngay trong mảng gốc
        }
    }

    // Các hàm xử lý sự kiện drag & drop
    let draggedElement = null;

    function onDragStart(event) {
        console.log('onDragStart', event.target.getAttribute('data-id'));
        draggedElement = event.currentTarget; // Phần tử đang được kéo
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("text/html", draggedElement.outerHTML);
    }

    function onDragOver(event) {
        event.preventDefault(); // Cho phép thả
        event.dataTransfer.dropEffect = "move";
    }

    function onDrop(event) {
        event.preventDefault(); // Ngăn hành động mặc định
        let id_drag_el = draggedElement.getAttribute('data-id');
        let id_current_el = event.currentTarget.getAttribute('data-id');
        console.log('onDrop', event.currentTarget.getAttribute('data-id'), draggedElement.getAttribute('data-id'));
        if (id_drag_el !== id_current_el) {
            // Xóa phần tử gốc
            // draggedElement.parentNode.removeChild(draggedElement);

            // Kiểm tra nếu phần tử đích có ul chứa con
            const dropTarget = event.currentTarget.querySelector("ul");
            console.log('abc', dropTarget);
            if (dropTarget) {
                dropTarget.appendChild(draggedElement);
            } else {
                // Nếu không có `ul`, tạo mới và thêm vào
                const newList = document.createElement("ul");
                newList.appendChild(draggedElement);
                event.currentTarget.appendChild(newList);
            }
        }

        // Xóa biến `draggedElement`
        draggedElement = null;
    }
})()
})();(()=>{(() => {
    $el("x-treegrid", [], (el) => {
        render(el);
    },(el, name, valNew, valOld) => {
        if (name == "t-options" && valOld) {
            render(el);
        }
    })
    
    function render(el) {
        var o = el.options();
        console.log('options', o);

        el.insertAdjacentElement('afterbegin', '<div>TEST</div>');
    }
})()})();(()=>{(() => {
    $el("x-text", [], (el) => {
        Object.defineProperties(el, {
            value: {
                get: () => {
                    return el.querySelector('textarea')?.value;
                },
                set: (v) => {
                    el.querySelector('textarea').value = v;
                }
            },
            setReadOnly: {
                value: (r) => {
                    if (r && [true, false].includes(r)) {
                        if (r) {
                            el.querySelector('textarea')?.setAttribute('readonly', 'true');
                        } else {
                            el.querySelector('textarea')?.removeAttribute('readonly');
                        }
                    }
                },
                writable: false
            },
            setDisable: {
                value: (d) => {
                    if (d && [true, false].includes(d)){
                        if (r) {
                            el.querySelector('textarea')?.setAttribute('disabled', 'true');
                        } else {
                            el.querySelector('textarea')?.removeAttribute('disabled');
                        }
                    }
                },
                writable: false
            }
        });
        render(el);
    }, (el, name, valNew, valOld) => {
        if (name == "t-options" && valOld) {
            render(el);
        }
    })

    function render(el){
        var o = el.options();
        o.class = (o.class || ['w100%', 'mih2.5rem', 'bd{1px;solid;#E8E9EC}', 'bda0.25rem', 'c{#141735}', 'dB', 'p{.45rem;1rem}', 'xs:px{0.5rem}', 'oli{none}']);
        if (!Array.isArray(o.class)) {
            o.class = o.class.split(" ").filter(f => f);
          }
          o.class = o.class.join(" ");
        el.innerHTML = `<textarea ${Object.keys(o).map(k => `${k}="${o[k]}"`).join(" ")}></textarea>`;

        let textarea = el.querySelector('textarea');
        if(textarea){
            textarea.oninput = (evt) =>{
                evt.target.style.height = 'auto'; // Đặt lại chiều cao để tính toán đúng
                evt.target.style.height = (evt.target.scrollHeight + 2) + 'px'; // Đặt chiều cao mới bằng chiều cao nội dung
            }
        }
    }
})()    })();(()=>{$el("x-date",[],(el)=>{
  init(el);
},(el,name,newVal,oldVal)=>{
  
});
function init(el){
  var op=el.options();
  el.innerHTML=`<div class="t-datebox df aic"><div class="posR">
  <span class="bd bda5px p3px df aic">
  	<span class="t-input-date bd0px posr">
     	<span class="">dd</span>
          <input class="tac bd0px posa w100% h100% t0px l0px" placeholder="dd">
     </span>/
     <span class="t-input-month posr">
     	<span class="p3px">mm</span>
          <input class="tac bd0px posa w100% h100% t0px l0px" placeholder="mm">
     </span>/
     <span class="t-input-year posr">
     	<span class="">yyyy</span>
          <input class="tac bd0px posa w100% h100% t0px l0px" placeholder="yyyy">
     </span>
     <t-svg class="cicon w23px h23px ml5px cr" t-options="name:'user',fill:'${$$colors.icon||'gray'}'"></t-svg>
  </span>
     <span class="t-select dn">
     	<div class="posA w{auto} h{auto}">
            <div class="d-head"></div>
            <div class="d-body dG gtc{23px;23px;23px;23px;23px;23px;23px;}">

            </div>
            <div class="d-foot df aic jcC">
                 <t-button class="btn_clear" t-options="name:'',title:'Clear'"></t-button>
                 <t-button class="btn_today" t-options="name:'',title:'Today'"></t-button>
            </div>
       </div>
     </span>
  </div></div>`;
  el.onchange=()=>{
    console.log("onchange",el.val())
  }
  el.querySelector(".btn_today").onclick=()=>{
    el.val(Date.now());
  }
  el.querySelector(".btn_clear").onclick=()=>{
    ips.forEach(ip=>{
      ip.value=``;
    });
    el.querySelector(".t-select").classList.add("dn");
    typeof el.onchange=="function"&&el.onchange(el);
  }
  el.querySelector(".cicon").onclick=()=>{
    var v=el.val();
    var day=new Date(v||new Date);
    var date=day.getDate();
    var month=day.getMonth();
    var di=1;
    day=new Date(`${day.getFullYear()}-${day.getMonth()+1}-1`);
    var i=1;
    el.querySelector(".t-select .d-body").innerHTML=``;
    while(day.getDay()>i){
      var t=new Date(day.getTime()-(day.getDay()-i)*86400000);
      //days.push(t);
      pushD(t,1)
      i++;
    }
    while(day.getMonth()==month){
      //days.push(day);
      pushD(day);
      day=new Date(day.getTime()+86400000);
    }
    i=day.getDay();
    while(i<=7){
      pushD(day,1);
      i++;
      day=new Date(day.getTime()+86400000);
    }
    el.querySelector(".t-select").classList.remove("dn");
    function pushD(day,outM){
      var s=document.createElement("span");
      s.innerHTML=`<div class="w23px h23px df aic cr jcC ${day.getDate()==date?'bd':''} ${day.getMonth()==month&&day.getDate()==date?'bg{green}':''} ${outM?'bg#ccc c#9e9e9e':''}">${day.getDate()}</div>`;
      el.querySelector(".t-select .d-body").append(s);
      s.onclick=()=>{
        el.val(day);
      }
    }
  }
  var ips=el.querySelectorAll("input");
  ips.forEach((ip,i)=>{
    ip.addEventListener("keydown",evt=>{
      //event.preventDefault();
      if(evt.keyCode==39){ /* arrow right*/
        if(i<2 && ip.selectionEnd==2){
          setTimeout(()=>{ips[i+1].focus()})
        }
      }else if(evt.keyCode==37){ /* arrow left*/
        if(i>0 && ip.selectionEnd==2){
          setTimeout(()=>{ips[i-1].focus()})
        }
      }else if(evt.keyCode==38){ /* arrow up */
        
      }else if(evt.keyCode==40){	/* arrow down */
        
      }
      console.log(evt);
    });
    ip.addEventListener("keypress",evt=>{
      //console.log("0,1,2,3,4,5,6,7,8,9".includes(evt.key))
      if(evt.key==13){
        return el.onchange(el);
      }
      if(!"0,1,2,3,4,5,6,7,8,9".includes(evt.key)){
         return event.preventDefault();
      }else if(i<2 && evt.target.value.length==2||i==2&&evt.target.value.length==4){
        //console.log("evt.target.value",evt.target.value)
         return event.preventDefault();
      }else if(i<2 && evt.target.value.length==1){
        var ni=i+1;
        if(ni<3){
          setTimeout(()=>{
            ips[ni].focus();
          })
        } 
      }else if(i==2&&evt.target.value.length==3){
        
      }
      ip.previousElementSibling.innerText=
        ip.value.padStart(i<2?2:4,0);
      //console.log(evt,evt.target.value)
    });
  });
  ips[1].addEventListener("blur",evt=>{
    var v=+ips[1].value||new Date().getMonth()+1;
    if(v>12){
      v=12;
    }
    ips[1].value=(v+"").padStart(2,0);
  })
  el.val=(v)=>{
    if(v){
      var d=new Date(v);
      ips[0].value=d.getDate();
      ips[1].value=d.getMonth()+1;
      ips[2].value=d.getFullYear();
    }
    var d=[ips[2].value,ips[1].value,ips[0].value].join("-");
    var t=new Date(d);
    if(t+""=='Invalid Date'){
      return
    }
    el.querySelector(".t-select").classList.add("dn");
    return [t.getFullYear(),t.getMonth()+1,t.getDate()].join('-');
  }
}
function render(el){
  
}
function setData(d){
  
}})();(()=>{$el("x-datetime",[],(el)=>{
  init(el);
},(el,name,newVal,oldVal)=>{
  
});
function init(el){
  var op=el.options();
  el.innerHTML=`<div class="t-datebox df aic"><div class="posR">
  <span class="bd bda5px p3px df aic">
  	<span class="t-input-date bd0px posr">
     	<span class="">dd</span>
          <input class="tac bd0px posa w100% h100% t0px l0px" placeholder="dd">
     </span>/
     <span class="t-input-month posr">
     	<span class="p3px">mm</span>
          <input class="tac bd0px posa w100% h100% t0px l0px" placeholder="mm">
     </span>/
     <span class="t-input-year posr">
     	<span class="">yyyy</span>
          <input class="tac bd0px posa w100% h100% t0px l0px" placeholder="yyyy">
     </span>
     <span class="t-input-time posr">
     	<span class="">hh:ii</span>
          <input class="tac bd0px posa w100% h100% t0px l0px" placeholder="hh:ii">
     </span>
     <t-svg class="cicon w23px h23px ml5px cr" t-options="name:'user',fill:'${$$colors.bcolor||'gray'}'"></t-svg>
  </span>
     <span class="t-select dn">
     	<div class="posA w{auto} h{auto}">
            <div class="d-head"></div>
            <div class="d-body dG gtc{23px;23px;23px;23px;23px;23px;23px;}">

            </div>
            <div class="d-foot df aic jcC">
                 <t-button class="btn_clear" t-options="name:'',title:'Clear'"></t-button>
                 <t-button class="btn_today" t-options="name:'',title:'Today'"></t-button>
            </div>
       </div>
     </span>
  </div></div>`;
  el.onchange=()=>{
    console.log("onchange",el.val())
  }
  el.querySelector(".btn_today").onclick=()=>{
    el.val(Date.now());
  }
  el.querySelector(".btn_clear").onclick=()=>{
    ips.forEach(ip=>{
      ip.value=``;
    });
    el.querySelector(".t-select").classList.add("dn");
    typeof el.onchange=="function"&&el.onchange(el);
  }
  el.querySelector(".cicon").onclick=()=>{
    var v=el.val();
    var day=new Date(v||new Date);
    var date=day.getDate();
    var month=day.getMonth();
    var di=1;
    day=new Date(`${day.getFullYear()}-${day.getMonth()+1}-1`);
    var i=1;
    el.querySelector(".t-select .d-body").innerHTML=``;
    while(day.getDay()>i){
      var t=new Date(day.getTime()-(day.getDay()-i)*86400000);
      //days.push(t);
      pushD(t,1)
      i++;
    }
    while(day.getMonth()==month){
      //days.push(day);
      pushD(day);
      day=new Date(day.getTime()+86400000);
    }
    i=day.getDay();
    while(i<=7){
      pushD(day,1);
      i++;
      day=new Date(day.getTime()+86400000);
    }
    el.querySelector(".t-select").classList.remove("dn");
    function pushD(day,outM){
      var s=document.createElement("span");
      s.innerHTML=`<div class="w23px h23px df aic cr jcC ${day.getDate()==date?'bd':''} ${day.getMonth()==month&&day.getDate()==date?'bg{green}':''} ${outM?'bg#ccc c#9e9e9e':''}">${day.getDate()}</div>`;
      el.querySelector(".t-select .d-body").append(s);
      s.onclick=()=>{
        el.val(day);
      }
    }
  }
  var ips=el.querySelectorAll("input");
  ips.forEach((ip,i)=>{
    ip.addEventListener("keydown",evt=>{
      //event.preventDefault();
      if(evt.keyCode==39){ /* arrow right*/
        if(i<2 && ip.selectionEnd==2){
          setTimeout(()=>{ips[i+1].focus()})
        }
      }else if(evt.keyCode==37){ /* arrow left*/
        if(i>0 && ip.selectionEnd==2){
          setTimeout(()=>{ips[i-1].focus()})
        }
      }else if(evt.keyCode==38){ /* arrow up */
        
      }else if(evt.keyCode==40){	/* arrow down */
        
      }
      console.log(evt);
    });
    ip.addEventListener("keypress",evt=>{
      //console.log("0,1,2,3,4,5,6,7,8,9".includes(evt.key))
      if(evt.key==13){
        return el.onchange(el);
      }
      if(!"0,1,2,3,4,5,6,7,8,9".includes(evt.key)){
         return event.preventDefault();
      }else if(i<2 && evt.target.value.length==2||i==2&&evt.target.value.length==4){
        //console.log("evt.target.value",evt.target.value)
         return event.preventDefault();
      }else if(i<2 && evt.target.value.length==1){
        var ni=i+1;
        if(ni<3){
          setTimeout(()=>{
            ips[ni].focus();
          })
        } 
      }else if(i==2&&evt.target.value.length==3){
        
      }
      ip.previousElementSibling.innerText=
        ip.value.padStart(i<2?2:4,0);
      //console.log(evt,evt.target.value)
    });
  });
  ips[1].addEventListener("blur",evt=>{
    var v=+ips[1].value||new Date().getMonth()+1;
    if(v>12){
      v=12;
    }
    ips[1].value=(v+"").padStart(2,0);
  })
  el.val=(v)=>{
    if(v){
      var d=new Date(v);
      ips[0].value=d.getDate();
      ips[1].value=d.getMonth()+1;
      ips[2].value=d.getFullYear();
    }
    var d=[ips[2].value,ips[1].value,ips[0].value].join("-");
    var t=new Date(d);
    if(t+""=='Invalid Date'){
      return
    }
    el.querySelector(".t-select").classList.add("dn");
    return [t.getFullYear(),t.getMonth()+1,t.getDate()].join('-');
  }
}
function render(el){
  
}
function setData(d){
  
}})();(()=>{$el("x-time",[],el=>{
  var o=el.options();
  el.innerHTML=`<input placeholder="hh:ii" ${Object.keys(o).map(k=>`${k}="${o[k]}"`).join(" ")}>`;
},(el,name,nv,ov)=>{})})();(()=>{    var ops = {
        height: 24,
        width: 24,
        viewBox: "0 -960 960 960",
        fill: $$colors?.bgmain?? "var(--c-dgreen)"
    }
    function render(el) {
        let { svg, path, title } = $tags("http://www.w3.org/2000/svg");
        el.innerText = "";
        var o = el.options();
        var s = $data.find(f => f.name == o.name);
        let arrPathTag = [];
        if (Array.isArray(s?.svg)) {
            for (let item of s.svg) {
                arrPathTag.push(path({ d: item??''}))
            }
        } else {
            arrPathTag.push(path({ d: s?.svg }))
        }
        var ob = { ...ops };
        [...Object.keys(ops), "name"].map(k => {
            if (typeof o[k] != "undefined") {
                return ob[k] = o[k];
            }
            if (s && typeof s[k] != "undefined") {
                return ob[k] = s[k];
            }
        })
        el.$el = s ? svg(
            ob,
            ...arrPathTag
        ) : null
        $add(el, el.$el);
    }
    $el("x-svg", [], (el) => {
        render(el);
        el.changeName = (n) => {
            let d = $data.find(item => item.name === n)
            el.querySelector('path')?.setAttribute('d', d?.svg);
        }
    }, (el, name, valNew, valOld) => {
        if (name == "t-options" && valOld) {
            render(el);
        }
    })})();(()=>{$el("x-nav", [], (el) => {
        render(el);
    }, (el, name, valNew, valOld) => {
        if (name === "t-options" && valOld) {
            render(el);
        }
    });

    function render(el) {
        const d = parseJSON(el.getAttribute('x-data'));
        const xdata = Array.isArray(d) ? d : [];
        
        // Hàm kiểm tra xem URL hiện tại có khớp với href không
        function isActive(href) {
            return window.location.pathname === new URL(href, window.location.origin).pathname;
        }

        if (xdata.length > 0) {
            el.innerHTML = `
                <nav class="bdtrr30px&bdbrr30px&bgc{#d0e1fb}@;.current">
                    ${xdata.map(item => {
                        const iconObj = item.icon.reduce((acc, cur) => {
                            if (typeof cur === 'object') {
                                return { ...acc, ...cur };
                            }
                            return acc;
                        }, {});

                        const iconStr = JSON.stringify(iconObj);
                        const hasSubIcon = item.subicon === 'true';
                        const isActiveClass = isActive(item.href) ? 'current' : '';

                        return `
                            <x-link 
                                t-options="title:'${item.title}', link:'${item.href}', subicon:'${hasSubIcon}'" 
                                data-icon='${iconStr}'
                                data-active='${isActiveClass}'
                            ></x-link>
                        `;
                    }).join('')}
                </nav>
            `;
        }
    }

    function parseJSON(str) {
        try {
            return JSON.parse(str);
        } catch (e) {
            return null;
        }
    }


})();(()=>{(() => {
    $el("x-table", [], (el) => {
        const xSelected = $state();
        const listData = $state([]);
        Object.defineProperties(el, {
            selected:{
                get: () => {
                    return xSelected.val;
                },
                set: (v) => {
                    xSelected.val = v;
                },
                configurable: true
            },
            data: {
                get: () => {
                    return listData.val;
                },
                set: (v,) => {
                    if(Array.isArray(v)){
                        listData.val = v;
                    }
                },
                configurable: true
            },
            setData: {
                value: (d) => {
                    console.log('setData', d);
                    if(Array.isArray(d)){
                        listData.val = d;
                        el.setAttribute('x-data', JSON.stringify(d));
                        render(el);
                    }
                },
                writable: false
            }
        });

        render(el);
    },(el, name, valNew, valOld) => {
        if (name == "t-options" && valOld) {
            render(el);
        }
    })
    
    function render(el) {
        var o = el.options();
        console.log('options', o);
        if(o.mutilSelect && o.mutilSelect == true){
            el.selected = [];
        }
        let xdataAttr = parseJSON(el.getAttribute('x-data'));
        const xdata = Array.isArray(xdataAttr) ? xdataAttr : [];
        let theadAttr = parseJSON(el.getAttribute('x-head'));
        const theadData = Array.isArray(theadAttr) ? theadAttr : [];
        // Div container
        let divTag = document.createElement('div');
        divTag.classList.add('oflxA', 'oflyA', 'wF', 'sbc{#F5F6FA_transparent}', 'sbw{thin}');
        // Table tag
        let tableTag = document.createElement('table');
        tableTag.classList.add('md:w100%', 'bdcl', 'bdc{#F1F1F3}', 'vaM', 'fns0.9375rem', 'fw{bold};thead', 'fns--fs;thead', 'bdb{1px;solid;#F1F1F3};td', 'p{0.625rem;0.825rem};td', 'wrb{break-word};td');
        // Thead
        let theadTag = document.createElement('thead');
        let trHeadTag = document.createElement('tr');
        trHeadTag.classList.add('ta{left}', 'posSt', 't0px', 'z1');
        if(theadData && theadData.length > 0){
            for(let item of theadData){
                let tdHeadTag = document.createElement('td');
                tdHeadTag.innerText = item.name;
                trHeadTag.appendChild(tdHeadTag);
            }   
        }
        theadTag.appendChild(trHeadTag);
        // Tbody
        let tbodyTag = document.createElement('tbody');
        tbodyTag.classList.add('bgc{#EDEEF0};tr:hover', 'cr{pointer};tr', 'ta{left};tr');
        if(xdata && xdata.length > 0){
            for(let item of xdata){
                let trBodyTag = document.createElement('tr');
                console.log('trBodyTag', item.id);
                trBodyTag.setAttribute('data-id', item.id);
                for(let label of theadData){
                    for(let key in item){
                        if(label.field == key){
                            let tdBodyTag = document.createElement('td');
                            tdBodyTag.innerText = item[key];
                            trBodyTag.appendChild(tdBodyTag)
                        } 
                    }
                }
                trBodyTag.addEventListener('click', function(evt){
                    let idTr = this.getAttribute('data-id');
                    if(o.mutilSelect && o.mutilSelect == true){
                        let isSelected = el.selected.includes(idTr)
                        if(isSelected){
                            el.selected = removeItemInArray(el.selected, idTr);
                        }else{
                            el.selected.push(idTr);
                        }
                        // hightlight this tr
                        this.classList.toggle('c{#39c}', !isSelected);
                        this.classList.toggle('bg{#eee}', !isSelected);
                    }else{
                        el.selected = idTr;
                        // bỏ tất cả hightlight
                        removeAllHightLightTr(el);
                        // hightlight this tr
                        this.classList.toggle('c{#39c}', true);
                        this.classList.toggle('bg{#eee}', true);
                    }
                })
                tbodyTag.appendChild(trBodyTag);
            }
            
        }
        // Add element
        tableTag.insertAdjacentElement('afterbegin', theadTag);
        tableTag.appendChild(tbodyTag);
        divTag.insertAdjacentElement('afterbegin', tableTag);
        el.innerHTML = '';
        el.insertAdjacentElement('afterbegin', divTag);
    }

    function parseJSON(str) {
        try {
            return JSON.parse(str);  // Nếu JSON.parse không ném lỗi, chuỗi hợp lệ
        } catch (e) {
            return null; // Nếu JSON.parse ném lỗi, chuỗi không hợp lệ
        }
    }

    function removeAllHightLightTr(el){
        let allTr = el.getElementsByTagName('tr');
        if(allTr && allTr.length > 0){
            for(let item of allTr){
                item.classList.toggle('c{#39c}', false);
                item.classList.toggle('bg{#eee}', false);
            }
        }
    }

    function removeItemInArray(array, value) {
        // Kiểm tra giá trị 'value' là một object hay không
        if (typeof value === 'object' && value !== null) {
          // Lấy key và giá trị từ object truyền vào
          const [key, val] = Object.entries(value)[0];
          
          // Lọc các phần tử không khớp với key và value đã cung cấp
          return array.filter(item => !(item[key] === val));
        } else {
          // Nếu không phải là object, xóa phần tử khớp với giá trị
          return array.filter(item => item !== value);
        }
      }
    
})()})();(()=>{(() => {
    $el("x-tab", [], (el) => {
        render(el);
    }, (el, name, valNew, valOld) => {
        if (name == "t-options" && valOld) {
            render(el);
        }
    });

    function render(el) {
        el.innerHTML = `
        <div>
        </div>`;
    }
})()})();(()=>{(() => {
    $el("x-radio", [], (el) => {
        render(el);
    }, (el, name, valNew, valOld) => {
        if (name == "t-options" && valOld) {
            render(el);
        }
    });

    function render(el) {
        var o = el.options();
        console.log('toarst', o);
       
        el.innerHTML = `<div></div>`;
        }
})()})();(()=>{$el("x-layout", [], (el) => {
        render(el);
  console.log('x-layout rendered')
      }, (el, name, valNew, valOld) => {
        if (name === "t-options" && valOld) {
          render(el);
        }
      });

      // Hàm render xử lý nội dung của x-layout
      async function render(el) {
        const o = el.options();

        // Xử lý class từ t-options
        if (!Array.isArray(o.class)) {
          o.class = o.class.split(" ").filter(f => f);
        }
        o.class = o.class.join(" ");
        el.className = o.class;

        // Tạo DocumentFragment để chứa các phần tử con
        const fragment = document.createDocumentFragment();

        // Di chuyển tất cả phần tử con hiện tại vào fragment
        while (el.firstChild) {
          fragment.appendChild(el.firstChild);
        }

        // Duyệt qua các phần tử con và fetch nội dung nếu có data-include
        const children = Array.from(fragment.children);
        for (const child of children) {
          const includeUrl = child.getAttribute('data-include');
          if (includeUrl) {
            const content = await fetchContent(includeUrl);
            if (content) {
              child.innerHTML = content;
            }
          }
        }

        // Chèn các phần tử từ fragment vào innerHTML mà không bọc thêm thẻ
        el.innerHTML = `
      <div class="${o.class}">
        ${children.map(child => child.outerHTML).join('')}
    </div>
    `;
      }

      // Hàm fetch nội dung từ URL
      async function fetchContent(url) {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status}`);
          }
          return await response.text();
        } catch (error) {
          console.error("Error fetching content:", error.message);
          return "<div class='error'>Failed to load content</div>";
        }
      }})();(()=>{$el("x-include", ['data-url'], async (el) => {
    //console.log('el', el);
    await render(el);
}, (el, name, valNew, valOld) => {
    //console.log(1, name, valOld, valNew);
    if (name === "t-options" && valOld) {
        render(el);
    }
});
async function render(el) {
    let data = el.getAttribute('data-options');
    if (data && isJsonObject(parseJSON(data))) {
        data = parseJSON(data);
    }
    await fetch(el.dataset.url).then(async r =>{
        const parser = new DOMParser();
        let htmlStr = await r.text();
        const doc = parser.parseFromString(htmlStr, 'text/html'); // Chuyển HTML text thành DOM
        // Tìm thẻ cần chỉnh sửa (ví dụ: <h1>)
        if(data && data.length > 0){
            for(let item of data){
                let targetElement;
                let targetElementArr = [];
                if(item.tagName){
                    targetElementArr = doc.querySelectorAll(`${item.tagName +  (item.name ? '[name="'+ item.name +'"]' : '')}`); // Thay bằng selector thẻ bạn muốn chỉnh sửa
                    if (targetElementArr && targetElementArr.length > 0) {
                        for(let elTag of targetElementArr){
                            if(item.text) elTag.textContent = item.text; // Thay đổi text
                            if(item.class) classList.add(item.class.replaceAll(' ', ',')); // Thay đổi class
                        }
                    }
                }
                if(item.tagId){
                    targetElement = doc.querySelector('#' + item.tagId);
                    if(targetElement){
                        if(item.text) targetElement.textContent = item.text; // Thay đổi text
                        if(item.class) targetElement.classList.add(item.class.replaceAll(' ', ',')); // Thay đổi class
                    }
                }
            }
        }
        let bodyTag = doc.querySelector('body');
        // Chuyển đổi DOM đã chỉnh sửa thành HTML string
        const updatedHTML = bodyTag.innerHTML;
        el.innerHTML = updatedHTML;
    });

}

function isJsonObject(value) {
    return value !== null && typeof value === 'object';
}

function parseJSON(str) {
    try {
        return JSON.parse(str);  // Nếu JSON.parse không ném lỗi, chuỗi hợp lệ
    } catch (e) {
        return null; // Nếu JSON.parse ném lỗi, chuỗi không hợp lệ
    }
}

})();(()=>{(() => {
    $el("x-loading", [], (el) => {
        render(el);
    }, (el, name, valNew, valOld) => {
        if (name == "t-options" && valOld) {
            render(el);
        }
    });

    function render(el) {
        el.innerHTML = `
        <style>
            #loading-page::before {
                content: '';
                display: block;
                position: fixed;
                width: 100%;
                height: 100%;
                background: rgb(0 0 0 / 32%);
                top: 0;
                left: 0;
                z-index: 10;
            }
            #loading-page{
                position: fixed;
                z-index: 9999;
                top: 40%;
                left: calc(50% - 40px);
            }
            
            .lds-ellipsis {
                display: inline-block;
                position: relative;
                width: 80px;
                height: 80px;
            }
            .lds-ellipsis div {
                position: absolute;
                top: 33px;
                width: 13px;
                height: 13px;
                border-radius: 50%;
                background: #262626;
                animation-timing-function: cubic-bezier(0, 1, 1, 0);
            }
            .lds-ellipsis div:nth-child(1) {
                left: 8px;
                animation: lds-ellipsis1 0.6s infinite;
            }
            .lds-ellipsis div:nth-child(2) {
                left: 8px;
                animation: lds-ellipsis2 0.6s infinite;
            }
            .lds-ellipsis div:nth-child(3) {
                left: 32px;
                animation: lds-ellipsis2 0.6s infinite;
            }
            .lds-ellipsis div:nth-child(4) {
                left: 56px;
                animation: lds-ellipsis3 0.6s infinite;
            }
            @keyframes lds-ellipsis1 {
                0% {
                transform: scale(0);
                }
                100% {
                transform: scale(1);
                }
            }
            @keyframes lds-ellipsis3 {
                0% {
                transform: scale(1);
                }
                100% {
                transform: scale(0);
                }
            }
            @keyframes lds-ellipsis2 {
                0% {
                transform: translate(0, 0);
                }
                100% {
                transform: translate(24px, 0);
                }
            }
        </style>
        <div id="loading-page">
            <div class="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div>
        </div>`;
    }
})()})();(()=>{(() => {
    $el("x-toarst", [], (el) => {
        var xTimer = $state(2000);
        Object.defineProperties(el, {
            fire:{
                value: (type, title, message, timer = 0) => {
                    type = typeof(type) == 'string' && type.length > 0 ? type : '';
                    message = typeof(message) == 'string' && message.length > 0 ? message : '';
                    let iconTag = el.querySelector('x-svg');
                    let messageTag = el.querySelector('p[name="message"]');
                    let titleTag = el.querySelector('p[name="title"]');
                    if(type){
                        switch(type){
                            case 'success':
                                iconTag.setAttribute('t-options', "name:'check', width:'3rem', height:'3rem', fill:'green'");
                                break;
                            case 'error':
                                iconTag.setAttribute('t-options', "name:'cancel', width:'3rem', height:'3rem',fill:'red'");
                                break;
                            case 'warning':
                                iconTag.setAttribute('t-options', "name:'error', width:'3rem', height:'3rem', fill:'yellow'");
                                break;
                            default: break;
                        }
                    }
                    messageTag.innerHTML = message && typeof(message) == 'string' && message.length > 0 ? message : '';
                    if(title && typeof(title) == 'string' && title.length > 0){
                        titleTag.innerHTML = title;
                        titleTag.classList.toggle('dN', false);
                    }else{
                        titleTag.classList.toggle('dN', true);
                    }
                    if(timer && typeof(timer) == 'number' && timer > 0){
                        el.timer = timer
                    }
                    el.classList.toggle('dN', false);
                    setTimeout(() =>{
                        el.classList.toggle('dN', true);
                    }, el.timer)
                },
                writable: false
            },
            timer: {
                get: () => {
                    return xTimer.val;
                },
                set: (t) => {
                    console.log('xt', t);
                    if(typeof(t) == 'number' && t > 0) xTimer.val = t;
                    console.log('xTimer', xTimer.val, t)
                },
                configurable: true
            }
        })
        render(el);
    }, (el, name, valNew, valOld) => {
        if (name == "t-options" && valOld) {
            render(el);
        }
    });

    function render(el) {
        var o = el.options();
        console.log('toarst', o);
        if(o.timer && typeof(o.timer) == 'number' && o.timer > 0){
            console.log('abc')
            el.timer = o.timer;
        } 
        el.classList.toggle('dN', true);
        let position = o.position && typeof(o.position) == 'string' && ['top-end', 'top-begin', 'bottom-end', 'bottom-begin', 'center-center'].includes(o.position) ? o.position : 'top-end';
        var posArr = [];
        if(position) posArr = position.split('-');
        el.innerHTML = `
            <div class="posF t0 ${posArr && posArr.length > 0 && posArr[1] == 'begin' ? 'l0' : 'r0'} z1060 h100% p0.625rem tran{background-color;.1s} peN w20rem">
                <div class="dF ${posArr && posArr.length > 0 && posArr[0] == 'bottom' ? 'jcE' : ''} fxdC w100% h100%">
                    <div class="bgc{#FFF} p{1rem} bda0.625rem bxshd{0;5px;15px;rgba(0,;0,;0,;0.2)} dF aiC gap1rem w100% bd!N">
                        <div>
                            <x-svg class="dB wFc" t-options="name:'check', width:'3rem', height:'3rem'"></x-svg>
                        </div>
                        <div class="dF fxdC gap0.875rem">
                            <p name="title" class="m0 fns1.125rem c{#545454} fw{bold}">Lỗi</p>
                            <p name="message" class="m0 fns1rem c{#333}">Test</p>
                        </div>
                    </div>
                </div>
            </div>`;
        }
})()})();
