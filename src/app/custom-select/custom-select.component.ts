import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, } from '@angular/forms';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true
    }],
})
export class CustomSelectComponent implements ControlValueAccessor {
  @Input() list = [];
  selectedCountry: string;
  optionsExpanded = false;
  private propagateChange;
  private onTouched;
  writeValue(value: any): void {
    if (value !== undefined) {
      this.selectedCountry = value;
    }
  }                  // interface
  registerOnChange(fn: any): any {
    this.propagateChange = fn;
  }               // interface
  registerOnTouched(fn: any): any {
    this.onTouched = fn;
  }             // interface

  selectOption(selected: string): void {
    if (selected !== this.list[0]) {
      this.propagateChange(selected);
      this.selectedCountry = selected;
      this.optionsExpanded = !this.optionsExpanded;
    }
  }
  showOptions(expand: boolean): void {
    if (expand) {
      this.optionsExpanded = false;
      this.onTouched();
    } else {
      this.optionsExpanded = true;
    }
  }
}

