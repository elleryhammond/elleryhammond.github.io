!function(){"use strict";class t{constructor(t,e,i){this._title=t.title,this._link=t.link,this._cardSelector=e,this._handleImageClick=i}_getTemplate(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}getView(){return this._cardElement=this._getTemplate(),this._setEventListeners(),this._cardElement.querySelector(".card__title").textContent=this._title,this._cardImage.setAttribute("src",this._link),this._cardImage.setAttribute("alt",this._title),this._cardElement}_setEventListeners(){this._likeButton=this._cardElement.querySelector(".card__like-button"),this._likeButton.addEventListener("click",this._handleLikeButton),this._deleteCardButton=this._cardElement.querySelector(".card__delete-button"),this._deleteCardButton.addEventListener("click",this._handleDeleteCardButton),this._cardImage=this._cardElement.querySelector(".card__image"),this._cardImage.addEventListener("click",(()=>{this._handleImageClick(this._title,this._link)}))}_handleLikeButton=()=>{this._likeButton.classList.toggle("card__like-button_active")};_handleDeleteCardButton=()=>{this._cardElement.remove(),this._cardElement=null}}class e{constructor(t,e){this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=e}_setEventListeners(){this._inputElements=[...this._formElement.querySelectorAll(this._inputSelector)],this._submitButton=this._formElement.querySelector(this._submitButtonSelector),this._inputElements.forEach((t=>{t.addEventListener("input",(e=>{this._checkInputValidity(t),this._toggleButtonState()}))}))}_showInputError(t){const e=this._formElement.querySelector(`#${t.id}-error`);t.classList.add(this._inputErrorClass),e.textContent=t.validationMessage,e.classList.add(this._errorClass)}_hideInputError(t){const e=this._formElement.querySelector(`#${t.id}-error`);t.classList.remove(this._inputErrorClass),e.textContent="",e.classList.remove(this._errorClass)}_checkInputValidity(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}_hasInvalidInput(t){return!t.every((t=>t.validity.valid))}_toggleButtonState(){this._hasInvalidInput(this._inputElements)?(this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0):(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1)}enableValidation(){this._formElement.addEventListener("submit",(t=>{t.preventDefault()})),this._setEventListeners()}resetValidation(){this._toggleButtonState()}}class i{constructor(t){this._popupElement=document.querySelector(t),this._closeButton=this._popupElement.querySelector(".modal__close")}open(){this._popupElement.classList.add("modal_opened"),document.addEventListener("keydown",this._handleEscClose)}close(){this._popupElement.classList.remove("modal_opened"),document.removeEventListener("keydown",this._handleEscClose)}_handleEscClose=t=>{"Escape"===t.key&&this.close()};setEventListeners(){this._popupElement.addEventListener("click",(t=>{t.target.classList.contains("modal_opened")&&this.close()})),this._closeButton.addEventListener("click",(()=>{this.close()}))}}class s extends i{constructor(t,e){super(t),this._popupForm=this._popupElement.querySelector(".modal__form"),this._inputItems=this._popupElement.querySelectorAll(".modal__input"),this._handleFormSubmit=e}_getInputValues(){const t={};return this._inputItems.forEach((e=>{t[e.name]=e.value})),console.log({inputValues:t}),t}setEventListeners(){super.setEventListeners(),this._popupForm.addEventListener("submit",(t=>{t.preventDefault(),this._handleFormSubmit(this._getInputValues()),this.close()}))}close(){this._popupForm.reset(),super.close()}}document.querySelector(".cards__list");const o=document.querySelector("#profile-edit-modal"),r=document.forms["edit-profile-form"],n=document.querySelector("#edit-profile-open-button"),l=(o.querySelector("#edit-profile-close-button"),document.querySelector("#add-card-modal")),a=document.forms["add-card-form"],c=document.querySelector("#add-card-open-button"),u=(l.querySelector("#add-card-close-button"),document.querySelector("#image-modal"),document.querySelector("#image-preview-modal"),document.querySelector("#image-preview-modal-close-button"),document.querySelector(".modal__caption"),document.querySelector(".profile__title"),document.querySelector(".profile__description"),document.querySelector("#profile-title-input")),d=document.querySelector("#profile-description-input"),_=(document.querySelector("#new-card-title-input"),document.querySelector("#new-card-link-input"),{formSelector:".modal__form",inputSelector:".modal__input",submitButtonSelector:".modal__button",inactiveButtonClass:"modal__button_disabled",inputErrorClass:"modal__input_type_error",errorClass:"modal__error_visible"}),m=new class{constructor(t,e){this._name=document.querySelector(t),this._description=document.querySelector(e)}getUserInfo(){return{name:this._name.textContent,description:this._description.textContent}}setUserInfo(t){this._name.textContent=t.name,this._description.textContent=t.description}}(".profile__title",".profile__description"),h=new s("#add-card-modal",(function(t){E(t),h.close()}));h.setEventListeners();const p=new s("#profile-edit-modal",(function(t){m.setUserInfo(t),console.log(t),p.close()}));p.setEventListeners();const f=new class extends i{constructor(t){super(t),this._image=this._popupElement.querySelector("#image-preview-modal"),this._caption=this._popupElement.querySelector(".modal__caption")}open(t,e){super.open(),this._image.src=e,this._image.alt=t,this._caption.textContent=t}}("#image-modal");function E(e){const i=function(e){return new t(e,"#card-template",((t,e)=>{f.open(t,e)})).getView()}(e);b.addItem(i)}f.setEventListeners();const b=new class{constructor(t,e){let{items:i,renderer:s}=t;this._items=i,this._renderer=s,this._container=document.querySelector(e)}renderItems(){this._items.forEach(this._renderer)}addItem(t){this._container.prepend(t)}}({items:[{title:"Latourell Falls",link:"https://images.unsplash.com/photo-1614271642428-5fc1b214d5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"},{title:"Mount Rainier",link:"https://images.unsplash.com/photo-1515310787031-25ac2d68610d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"},{title:"Arches National Park",link:"https://plus.unsplash.com/premium_photo-1674664242929-f562b1069c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"},{title:"Blue Ridge Parkway",link:"https://images.unsplash.com/photo-1541424729898-d4420afb9602?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2864&q=80"},{title:"Morris Island Lighthouse",link:"https://images.unsplash.com/photo-1658518449993-1030370f1de4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2112&q=80"},{title:"Portland, Oregon",link:"https://images.unsplash.com/photo-1635209896150-ef275dbd52a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2875&q=80"}],renderer:E},".cards__list");b.renderItems(),new e(_,r).enableValidation();const y=new e(_,a);y.enableValidation(),n.addEventListener("click",(()=>{const t=m.getUserInfo();u.value=t.name,d.value=t.description,p.open()})),c.addEventListener("click",(()=>{y.resetValidation(),h.open()}))}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFHekI0QixFQUFrQjVFLGlCQUFpQixTQUFTLEtBQzFDZ0gsRUFBcUJyRSxrQkFDckIrQyxFQUFhMUMsTUFBTSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IoY2FyZERhdGEsIGNhcmRTZWxlY3RvciwgaGFuZGxlSW1hZ2VDbGljaykge1xuICAgIHRoaXMuX3RpdGxlID0gY2FyZERhdGEudGl0bGU7XG4gICAgdGhpcy5fbGluayA9IGNhcmREYXRhLmxpbms7XG4gICAgdGhpcy5fY2FyZFNlbGVjdG9yID0gY2FyZFNlbGVjdG9yO1xuICAgIHRoaXMuX2hhbmRsZUltYWdlQ2xpY2sgPSBoYW5kbGVJbWFnZUNsaWNrO1xuICB9XG5cbiAgX2dldFRlbXBsYXRlKCkge1xuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NhcmRTZWxlY3RvcilcbiAgICAgIC5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZFwiKVxuICAgICAgLmNsb25lTm9kZSh0cnVlKTtcblxuICAgIHJldHVybiBjYXJkRWxlbWVudDtcbiAgfVxuXG4gIGdldFZpZXcoKSB7XG4gICAgdGhpcy5fY2FyZEVsZW1lbnQgPSB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgY29uc3QgY2FyZFRpdGxlID0gdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX190aXRsZVwiKTtcbiAgICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLl90aXRsZTtcbiAgICB0aGlzLl9jYXJkSW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIHRoaXMuX2xpbmspO1xuICAgIHRoaXMuX2NhcmRJbWFnZS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgdGhpcy5fdGl0bGUpO1xuICAgIHJldHVybiB0aGlzLl9jYXJkRWxlbWVudDtcbiAgfVxuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9saWtlQnV0dG9uID0gdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19saWtlLWJ1dHRvblwiKTtcbiAgICB0aGlzLl9saWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9oYW5kbGVMaWtlQnV0dG9uKTtcblxuICAgIHRoaXMuX2RlbGV0ZUNhcmRCdXR0b24gPSB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIuY2FyZF9fZGVsZXRlLWJ1dHRvblwiXG4gICAgKTtcbiAgICB0aGlzLl9kZWxldGVDYXJkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICB0aGlzLl9oYW5kbGVEZWxldGVDYXJkQnV0dG9uXG4gICAgKTtcblxuICAgIHRoaXMuX2NhcmRJbWFnZSA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1hZ2VcIik7XG4gICAgdGhpcy5fY2FyZEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLl9oYW5kbGVJbWFnZUNsaWNrKHRoaXMuX3RpdGxlLCB0aGlzLl9saW5rKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9oYW5kbGVMaWtlQnV0dG9uID0gKCkgPT4ge1xuICAgIHRoaXMuX2xpa2VCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImNhcmRfX2xpa2UtYnV0dG9uX2FjdGl2ZVwiKTtcbiAgfTtcblxuICBfaGFuZGxlRGVsZXRlQ2FyZEJ1dHRvbiA9ICgpID0+IHtcbiAgICB0aGlzLl9jYXJkRWxlbWVudC5yZW1vdmUoKTtcbiAgICB0aGlzLl9jYXJkRWxlbWVudCA9IG51bGw7XG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIGZvcm1FbGVtZW50KSB7XG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IHNldHRpbmdzLmlucHV0U2VsZWN0b3I7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBzZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcbiAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcztcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBzZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3M7XG4gICAgdGhpcy5fZXJyb3JDbGFzcyA9IHNldHRpbmdzLmVycm9yQ2xhc3M7XG4gICAgdGhpcy5fZm9ybUVsZW1lbnQgPSBmb3JtRWxlbWVudDtcbiAgfVxuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9pbnB1dEVsZW1lbnRzID0gW1xuICAgICAgLi4udGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKSxcbiAgICBdO1xuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbiA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvclxuICAgICk7XG4gICAgdGhpcy5faW5wdXRFbGVtZW50cy5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpO1xuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBfc2hvd0lucHV0RXJyb3IoaW5wdXRFbGVtZW50KSB7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgIyR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmBcbiAgICApO1xuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gICAgZXJyb3JNZXNzYWdlRWxlbWVudC50ZXh0Q29udGVudCA9IGlucHV0RWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZTtcbiAgICBlcnJvck1lc3NhZ2VFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XG4gIH1cblxuICBfaGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KSB7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgIyR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmBcbiAgICApO1xuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gICAgZXJyb3JNZXNzYWdlRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgZXJyb3JNZXNzYWdlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICB9XG5cbiAgX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpIHtcbiAgICBpZiAoIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBfaGFzSW52YWxpZElucHV0KGlucHV0TGlzdCkge1xuICAgIHJldHVybiAhaW5wdXRMaXN0LmV2ZXJ5KChpbnB1dEVsZW1lbnQpID0+IGlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCk7XG4gIH1cblxuICBfdG9nZ2xlQnV0dG9uU3RhdGUoKSB7XG4gICAgaWYgKHRoaXMuX2hhc0ludmFsaWRJbnB1dCh0aGlzLl9pbnB1dEVsZW1lbnRzKSkge1xuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy5fZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIHJlc2V0VmFsaWRhdGlvbigpIHtcbiAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpO1xuXG4gICAgLy8gdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xuICAgIC8vICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcbiAgICAvLyB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3B1cFNlbGVjdG9yKTtcbiAgICB0aGlzLl9jbG9zZUJ1dHRvbiA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jbG9zZVwiKTtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9vcGVuZWRcIik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbF9vcGVuZWRcIik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xuICB9XG5cbiAgX2hhbmRsZUVzY0Nsb3NlID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbF9vcGVuZWRcIikpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuX2Nsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yLCBoYW5kbGVGb3JtU3VibWl0KSB7XG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5fcG9wdXBGb3JtID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1cIik7XG4gICAgdGhpcy5faW5wdXRJdGVtcyA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsX19pbnB1dFwiKTtcbiAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0ID0gaGFuZGxlRm9ybVN1Ym1pdDtcbiAgfVxuXG4gIF9nZXRJbnB1dFZhbHVlcygpIHtcbiAgICBjb25zdCBpbnB1dFZhbHVlcyA9IHt9O1xuICAgIHRoaXMuX2lucHV0SXRlbXMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIGlucHV0VmFsdWVzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coeyBpbnB1dFZhbHVlcyB9KTtcbiAgICByZXR1cm4gaW5wdXRWYWx1ZXM7XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuX3BvcHVwRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQodGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9wb3B1cEZvcm0ucmVzZXQoKTtcbiAgICBzdXBlci5jbG9zZSgpO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgaW5pdGlhbENhcmRzID0gW1xuICB7XG4gICAgdGl0bGU6IFwiTGF0b3VyZWxsIEZhbGxzXCIsXG4gICAgbGluazogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYxNDI3MTY0MjQyOC01ZmMxYjIxNGQ1Yjg/aXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9Mjc4NyZxPTgwXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJNb3VudCBSYWluaWVyXCIsXG4gICAgbGluazogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxNTMxMDc4NzAzMS0yNWFjMmQ2ODYxMGQ/aXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9Mjc4NyZxPTgwXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJBcmNoZXMgTmF0aW9uYWwgUGFya1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wbHVzLnVuc3BsYXNoLmNvbS9wcmVtaXVtX3Bob3RvLTE2NzQ2NjQyNDI5MjktZjU2MmIxMDY5YzAyP2l4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTI3ODcmcT04MFwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQmx1ZSBSaWRnZSBQYXJrd2F5XCIsXG4gICAgbGluazogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU0MTQyNDcyOTg5OC1kNDQyMGFmYjk2MDI/aXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9Mjg2NCZxPTgwXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJNb3JyaXMgSXNsYW5kIExpZ2h0aG91c2VcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjU4NTE4NDQ5OTkzLTEwMzAzNzBmMWRlND9peGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0QmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yMTEyJnE9ODBcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlBvcnRsYW5kLCBPcmVnb25cIixcbiAgICBsaW5rOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjM1MjA5ODk2MTUwLWVmMjc1ZGJkNTJhMj9peGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0QmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yODc1JnE9ODBcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBjYXJkRGF0YSA9IHtcbiAgdGl0bGU6IFwiTGF0b3VyZWxsIEZhbGxzXCIsXG4gIGxpbms6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MTQyNzE2NDI0MjgtNWZjMWIyMTRkNWI4P2l4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTI3ODcmcT04MFwiLFxufTtcblxuLy8gZXhwb3J0IGNvbnN0IGNhcmRUZW1wbGF0ZSA9IGRvY3VtZW50XG4vLyAgIC5xdWVyeVNlbGVjdG9yKFwiI2NhcmQtdGVtcGxhdGVcIilcbi8vICAgLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkXCIpO1xuXG5leHBvcnQgY29uc3QgY2FyZHNXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19fbGlzdFwiKTtcblxuZXhwb3J0IGNvbnN0IHByb2ZpbGVFZGl0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGUtZWRpdC1tb2RhbFwiKTtcbmV4cG9ydCBjb25zdCBwcm9maWxlRWRpdEZvcm0gPSBkb2N1bWVudC5mb3Jtc1tcImVkaXQtcHJvZmlsZS1mb3JtXCJdO1xuZXhwb3J0IGNvbnN0IHByb2ZpbGVFZGl0T3BlbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiI2VkaXQtcHJvZmlsZS1vcGVuLWJ1dHRvblwiXG4pO1xuZXhwb3J0IGNvbnN0IHByb2ZpbGVFZGl0Q2xvc2VCdXR0b24gPSBwcm9maWxlRWRpdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXG4gIFwiI2VkaXQtcHJvZmlsZS1jbG9zZS1idXR0b25cIlxuKTtcblxuZXhwb3J0IGNvbnN0IGFkZENhcmRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWNhcmQtbW9kYWxcIik7XG5leHBvcnQgY29uc3QgYWRkQ2FyZEZvcm0gPSBkb2N1bWVudC5mb3Jtc1tcImFkZC1jYXJkLWZvcm1cIl07XG5leHBvcnQgY29uc3QgYWRkQ2FyZE9wZW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIiNhZGQtY2FyZC1vcGVuLWJ1dHRvblwiXG4pO1xuZXhwb3J0IGNvbnN0IGFkZENhcmRDbG9zZUJ1dHRvbiA9IGFkZENhcmRNb2RhbC5xdWVyeVNlbGVjdG9yKFxuICBcIiNhZGQtY2FyZC1jbG9zZS1idXR0b25cIlxuKTtcblxuZXhwb3J0IGNvbnN0IGltYWdlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltYWdlLW1vZGFsXCIpO1xuZXhwb3J0IGNvbnN0IGltYWdlTW9kYWxQcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWFnZS1wcmV2aWV3LW1vZGFsXCIpO1xuZXhwb3J0IGNvbnN0IHByZXZpZXdNb2RhbENsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCIjaW1hZ2UtcHJldmlldy1tb2RhbC1jbG9zZS1idXR0b25cIlxuKTtcbmV4cG9ydCBjb25zdCBtb2RhbENhcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jYXB0aW9uXCIpO1xuXG5leHBvcnQgY29uc3QgcHJvZmlsZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX190aXRsZVwiKTtcbmV4cG9ydCBjb25zdCBwcm9maWxlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIi5wcm9maWxlX19kZXNjcmlwdGlvblwiXG4pO1xuXG5leHBvcnQgY29uc3QgcHJvZmlsZVRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGUtdGl0bGUtaW5wdXRcIik7XG5leHBvcnQgY29uc3QgcHJvZmlsZURlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIiNwcm9maWxlLWRlc2NyaXB0aW9uLWlucHV0XCJcbik7XG5cbmV4cG9ydCBjb25zdCBuZXdDYXJkVGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiI25ldy1jYXJkLXRpdGxlLWlucHV0XCJcbik7XG5leHBvcnQgY29uc3QgbmV3Q2FyZExpbmtJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LWNhcmQtbGluay1pbnB1dFwiKTtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgZm9ybVNlbGVjdG9yOiBcIi5tb2RhbF9fZm9ybVwiLFxuICBpbnB1dFNlbGVjdG9yOiBcIi5tb2RhbF9faW5wdXRcIixcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLm1vZGFsX19idXR0b25cIixcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJtb2RhbF9fYnV0dG9uX2Rpc2FibGVkXCIsXG4gIGlucHV0RXJyb3JDbGFzczogXCJtb2RhbF9faW5wdXRfdHlwZV9lcnJvclwiLFxuICBlcnJvckNsYXNzOiBcIm1vZGFsX19lcnJvcl92aXNpYmxlXCIsXG59O1xuIiwiaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qc1wiO1xuaW1wb3J0IFBvcHVwIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwLmpzXCI7XG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzXCI7XG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanNcIjtcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb24uanNcIjtcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VySW5mby5qc1wiO1xuXG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuXG5pbXBvcnQge1xuICBpbml0aWFsQ2FyZHMsXG4gIGNhcmRzV3JhcCxcbiAgcHJvZmlsZUVkaXRNb2RhbCxcbiAgcHJvZmlsZUVkaXRGb3JtLFxuICBwcm9maWxlRWRpdE9wZW5CdXR0b24sXG4gIHByb2ZpbGVFZGl0Q2xvc2VCdXR0b24sXG4gIGFkZENhcmRNb2RhbCxcbiAgYWRkQ2FyZEZvcm0sXG4gIGFkZENhcmRPcGVuQnV0dG9uLFxuICBhZGRDYXJkQ2xvc2VCdXR0b24sXG4gIGltYWdlTW9kYWwsXG4gIGltYWdlTW9kYWxQcmV2aWV3LFxuICBwcmV2aWV3TW9kYWxDbG9zZUJ1dHRvbixcbiAgbW9kYWxDYXB0aW9uLFxuICBwcm9maWxlVGl0bGUsXG4gIHByb2ZpbGVEZXNjcmlwdGlvbixcbiAgcHJvZmlsZVRpdGxlSW5wdXQsXG4gIHByb2ZpbGVEZXNjcmlwdGlvbklucHV0LFxuICBuZXdDYXJkVGl0bGVJbnB1dCxcbiAgbmV3Q2FyZExpbmtJbnB1dCxcbiAgY29uZmlnLFxuICBjYXJkRGF0YSxcbn0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50cy5qc1wiO1xuXG5jb25zdCBuZXdVc2VySW5mbyA9IG5ldyBVc2VySW5mbyhcIi5wcm9maWxlX190aXRsZVwiLCBcIi5wcm9maWxlX19kZXNjcmlwdGlvblwiKTtcblxuY29uc3QgYWRkQ2FyZFBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm0oXCIjYWRkLWNhcmQtbW9kYWxcIiwgaGFuZGxlQWRkQ2FyZFN1Ym1pdCk7XG5hZGRDYXJkUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuY29uc3QgZWRpdFByb2ZpbGVQb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3JtKFxuICBcIiNwcm9maWxlLWVkaXQtbW9kYWxcIixcbiAgaGFuZGxlUHJvZmlsZUVkaXRTdWJtaXRcbik7XG5lZGl0UHJvZmlsZVBvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbmNvbnN0IGltYWdlUHJldmlldyA9IG5ldyBQb3B1cFdpdGhJbWFnZShcIiNpbWFnZS1tb2RhbFwiKTtcbmltYWdlUHJldmlldy5zZXRFdmVudExpc3RlbmVycygpO1xuXG5mdW5jdGlvbiBjcmVhdGVDYXJkKGNhcmREYXRhKSB7XG4gIGNvbnN0IGNhcmRFbGVtZW50ID0gbmV3IENhcmQoY2FyZERhdGEsIFwiI2NhcmQtdGVtcGxhdGVcIiwgKGxpbmssIHRpdGxlKSA9PiB7XG4gICAgaW1hZ2VQcmV2aWV3Lm9wZW4obGluaywgdGl0bGUpO1xuICB9KTtcbiAgcmV0dXJuIGNhcmRFbGVtZW50LmdldFZpZXcoKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ2FyZChjYXJkRGF0YSkge1xuICBjb25zdCBlbGVtZW50ID0gY3JlYXRlQ2FyZChjYXJkRGF0YSk7XG4gIGNhcmRTZWN0aW9uLmFkZEl0ZW0oZWxlbWVudCk7XG59XG5cbmNvbnN0IGNhcmRTZWN0aW9uID0gbmV3IFNlY3Rpb24oXG4gIHsgaXRlbXM6IGluaXRpYWxDYXJkcywgcmVuZGVyZXI6IHJlbmRlckNhcmQgfSxcbiAgXCIuY2FyZHNfX2xpc3RcIlxuKTtcbmNhcmRTZWN0aW9uLnJlbmRlckl0ZW1zKCk7XG5cbi8vIENyZWF0ZSB1bml2ZXJzYWwgaW5zdGFuY2VzIG9mIHZhbGlkYXRvcnNcblxuLy8gY29uc3QgZm9ybVZhbGlkYXRvcnMgPSB7fTtcbi8vIGNvbnN0IGVuYWJsZVZhbGlkYXRpb24gPSAoY29uZmlnKSA9PiB7XG4vLyAgIGNvbnN0IGZvcm1MaXN0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNvbmZpZy5mb3JtU2VsZWN0b3IpKTtcbi8vICAgZm9ybUxpc3QuZm9yRWFjaCgoZm9ybUVsZW1lbnQpID0+IHtcbi8vICAgICBjb25zdCB2YWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihjb25maWcsIGZvcm1FbGVtZW50KTtcbi8vICAgICBjb25zdCBwcm9maWxlRWRpdEZvcm0gPSBmb3JtRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJlZGl0LXByb2ZpbGUtZm9ybVwiKTtcbi8vICAgICBjb25zdCBhZGRDYXJkRm9ybSA9IGZvcm1FbGVtZW50LmdldEF0dHJpYnV0ZShcImFkZC1jYXJkLWZvcm1cIik7XG4vLyAgICAgZm9ybVZhbGlkYXRvcnNbcHJvZmlsZUVkaXRGb3JtXSA9IHZhbGlkYXRvcjtcbi8vICAgICBmb3JtVmFsaWRhdG9yc1thZGRDYXJkRm9ybV0gPSB2YWxpZGF0b3I7XG4vLyAgICAgdmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcbi8vICAgfSk7XG4vLyB9O1xuLy8gZW5hYmxlVmFsaWRhdGlvbihjb25maWcpO1xuXG5jb25zdCBwcm9maWxlRWRpdEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihjb25maWcsIHByb2ZpbGVFZGl0Rm9ybSk7XG5wcm9maWxlRWRpdEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuXG5jb25zdCBhZGRDYXJkRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKGNvbmZpZywgYWRkQ2FyZEZvcm0pO1xuYWRkQ2FyZEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuXG5mdW5jdGlvbiBoYW5kbGVBZGRDYXJkU3VibWl0KGRhdGEpIHtcbiAgcmVuZGVyQ2FyZChkYXRhKTtcbiAgYWRkQ2FyZFBvcHVwLmNsb3NlKCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVByb2ZpbGVFZGl0U3VibWl0KGRhdGEpIHtcbiAgbmV3VXNlckluZm8uc2V0VXNlckluZm8oZGF0YSk7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICBlZGl0UHJvZmlsZVBvcHVwLmNsb3NlKCk7XG59XG5cbi8vIEV2ZW50IExpc3RlbmVycyAvL1xuXG5wcm9maWxlRWRpdE9wZW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IG5ld1VzZXJJbmZvLmdldFVzZXJJbmZvKCk7XG4gIHByb2ZpbGVUaXRsZUlucHV0LnZhbHVlID0gZGF0YS5uYW1lO1xuICBwcm9maWxlRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IGRhdGEuZGVzY3JpcHRpb247XG4gIGVkaXRQcm9maWxlUG9wdXAub3BlbigpO1xufSk7XG5cbmFkZENhcmRPcGVuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGFkZENhcmRGb3JtVmFsaWRhdG9yLnJlc2V0VmFsaWRhdGlvbigpO1xuICBhZGRDYXJkUG9wdXAub3BlbigpO1xufSk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XG4gIGNvbnN0cnVjdG9yKG5hbWVTZWxlY3RvciwgZGVzY3JpcHRpb25TZWxlY3Rvcikge1xuICAgIHRoaXMuX25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hbWVTZWxlY3Rvcik7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGRlc2NyaXB0aW9uU2VsZWN0b3IpO1xuICB9XG5cbiAgZ2V0VXNlckluZm8oKSB7XG4gICAgY29uc3QgdXNlckluZm8gPSB7XG4gICAgICBuYW1lOiB0aGlzLl9uYW1lLnRleHRDb250ZW50LFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuX2Rlc2NyaXB0aW9uLnRleHRDb250ZW50LFxuICAgIH07XG4gICAgcmV0dXJuIHVzZXJJbmZvO1xuICB9XG5cbiAgc2V0VXNlckluZm8odXNlckRhdGEpIHtcbiAgICB0aGlzLl9uYW1lLnRleHRDb250ZW50ID0gdXNlckRhdGEubmFtZTtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHVzZXJEYXRhLmRlc2NyaXB0aW9uO1xuICB9XG59XG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcbiAgICB0aGlzLl9pbWFnZSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltYWdlLXByZXZpZXctbW9kYWxcIik7XG4gICAgdGhpcy5fY2FwdGlvbiA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jYXB0aW9uXCIpO1xuICB9XG5cbiAgb3Blbih0aXRsZSwgbGluaykge1xuICAgIHN1cGVyLm9wZW4oKTtcbiAgICB0aGlzLl9pbWFnZS5zcmMgPSBsaW5rO1xuICAgIHRoaXMuX2ltYWdlLmFsdCA9IHRpdGxlO1xuICAgIHRoaXMuX2NhcHRpb24udGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHsgaXRlbXMsIHJlbmRlcmVyIH0sIGNvbnRhaW5lclNlbGVjdG9yKSB7XG4gICAgdGhpcy5faXRlbXMgPSBpdGVtcztcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xuICB9XG5cbiAgcmVuZGVySXRlbXMoKSB7XG4gICAgdGhpcy5faXRlbXMuZm9yRWFjaCh0aGlzLl9yZW5kZXJlcik7XG4gIH1cblxuICBhZGRJdGVtKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChlbGVtZW50KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNhcmQiLCJjb25zdHJ1Y3RvciIsImNhcmREYXRhIiwiY2FyZFNlbGVjdG9yIiwiaGFuZGxlSW1hZ2VDbGljayIsInRoaXMiLCJfdGl0bGUiLCJ0aXRsZSIsIl9saW5rIiwibGluayIsIl9jYXJkU2VsZWN0b3IiLCJfaGFuZGxlSW1hZ2VDbGljayIsIl9nZXRUZW1wbGF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJnZXRWaWV3IiwiX2NhcmRFbGVtZW50IiwiX3NldEV2ZW50TGlzdGVuZXJzIiwidGV4dENvbnRlbnQiLCJfY2FyZEltYWdlIiwic2V0QXR0cmlidXRlIiwiX2xpa2VCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiX2hhbmRsZUxpa2VCdXR0b24iLCJfZGVsZXRlQ2FyZEJ1dHRvbiIsIl9oYW5kbGVEZWxldGVDYXJkQnV0dG9uIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicmVtb3ZlIiwiRm9ybVZhbGlkYXRvciIsInNldHRpbmdzIiwiZm9ybUVsZW1lbnQiLCJfaW5wdXRTZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJfc3VibWl0QnV0dG9uU2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsIl9pbnB1dEVycm9yQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJfZXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJfZm9ybUVsZW1lbnQiLCJfaW5wdXRFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfc3VibWl0QnV0dG9uIiwiZm9yRWFjaCIsImlucHV0RWxlbWVudCIsImV2ZW50IiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsIl90b2dnbGVCdXR0b25TdGF0ZSIsIl9zaG93SW5wdXRFcnJvciIsImVycm9yTWVzc2FnZUVsZW1lbnQiLCJpZCIsImFkZCIsInZhbGlkYXRpb25NZXNzYWdlIiwiX2hpZGVJbnB1dEVycm9yIiwidmFsaWRpdHkiLCJ2YWxpZCIsIl9oYXNJbnZhbGlkSW5wdXQiLCJpbnB1dExpc3QiLCJldmVyeSIsImRpc2FibGVkIiwiZW5hYmxlVmFsaWRhdGlvbiIsInByZXZlbnREZWZhdWx0IiwicmVzZXRWYWxpZGF0aW9uIiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiX3BvcHVwRWxlbWVudCIsIl9jbG9zZUJ1dHRvbiIsIm9wZW4iLCJfaGFuZGxlRXNjQ2xvc2UiLCJjbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJrZXkiLCJzZXRFdmVudExpc3RlbmVycyIsInRhcmdldCIsImNvbnRhaW5zIiwiUG9wdXBXaXRoRm9ybSIsImhhbmRsZUZvcm1TdWJtaXQiLCJzdXBlciIsIl9wb3B1cEZvcm0iLCJfaW5wdXRJdGVtcyIsIl9oYW5kbGVGb3JtU3VibWl0IiwiX2dldElucHV0VmFsdWVzIiwiaW5wdXRWYWx1ZXMiLCJpbnB1dCIsIm5hbWUiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJyZXNldCIsInByb2ZpbGVFZGl0TW9kYWwiLCJwcm9maWxlRWRpdEZvcm0iLCJmb3JtcyIsInByb2ZpbGVFZGl0T3BlbkJ1dHRvbiIsImFkZENhcmRNb2RhbCIsImFkZENhcmRGb3JtIiwiYWRkQ2FyZE9wZW5CdXR0b24iLCJwcm9maWxlVGl0bGVJbnB1dCIsInByb2ZpbGVEZXNjcmlwdGlvbklucHV0IiwiY29uZmlnIiwiZm9ybVNlbGVjdG9yIiwibmV3VXNlckluZm8iLCJuYW1lU2VsZWN0b3IiLCJkZXNjcmlwdGlvblNlbGVjdG9yIiwiX25hbWUiLCJfZGVzY3JpcHRpb24iLCJnZXRVc2VySW5mbyIsImRlc2NyaXB0aW9uIiwic2V0VXNlckluZm8iLCJ1c2VyRGF0YSIsImFkZENhcmRQb3B1cCIsImRhdGEiLCJyZW5kZXJDYXJkIiwiZWRpdFByb2ZpbGVQb3B1cCIsImltYWdlUHJldmlldyIsIl9pbWFnZSIsIl9jYXB0aW9uIiwic3JjIiwiYWx0IiwiZWxlbWVudCIsImNyZWF0ZUNhcmQiLCJjYXJkU2VjdGlvbiIsImFkZEl0ZW0iLCJfcmVmIiwiY29udGFpbmVyU2VsZWN0b3IiLCJpdGVtcyIsInJlbmRlcmVyIiwiX2l0ZW1zIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsInJlbmRlckl0ZW1zIiwicHJlcGVuZCIsImFkZENhcmRGb3JtVmFsaWRhdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==