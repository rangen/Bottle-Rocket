import React from 'react';
import './new-wine-form.styles.scss';
import Input from '../input/input';

const NewWineForm = ({ handleChange, fullName, price, inventory, color, natural, organic, biodynamic, submitNewWine, handleChecked, image, handlePreviewImage }) => {
  return (
    <div>
      <form onSubmit={(e) => submitNewWine(e)}>
        <Input name="full_name" value={fullName} chg={handleChange} label='Full Name:' />
        <Input name='price' value={price} chg={handleChange} label='Price:'/>
        <Input name='inventory'  value={inventory} chg={handleChange} label='Inventory:'/>
        <Input name='color' value={color} chg={handleChange} label='Color:'/>
        <label>Natural:
          <input name='natural' value={natural} type='checkbox' checked={natural} onChange={handleChecked} />
        </label>
        <label>Organic:
          <input name='organic' value={organic} type='checkbox' checked={organic} onChange={handleChecked} />
        </label>
        <label>Biodynamic:
          <input name='biodynamic' value={biodynamic} type='checkbox' checked={biodynamic} onChange={handleChecked} />
        </label>
        <label>Image:</label>
        <input type='file' name='image' accept="image/*" onChange={handlePreviewImage}/>
        <img src={image} alt="" style={{width: '10%', height: "10%"}} />
        <input type='submit' />
      </form>
    </div>
  )
}

export default NewWineForm;
