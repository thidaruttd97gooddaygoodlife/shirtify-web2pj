'use client';

import { useState } from 'react';
import Head from 'next/head';
import '../SizeCalculator/globals.css';

const SizeCalculator = () => {
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [waist, setWaist] = useState('');
  const [hip, setHip] = useState('');
  const [size, setSize] = useState('');
  const [errors, setErrors] = useState({
    gender: '',
    weight: '',
    height: '',
    waist: '',
    hip: ''
  });
  const [isPrinted, setIsPrinted] = useState(false);

  const validateInputs = () => {
    let valid = true;
    const newErrors = {
      gender: '',
      weight: '',
      height: '',
      waist: '',
      hip: ''
    };

    // Gender
    if (!gender) {
      newErrors.gender = 'Please select your gender';
      valid = false;
    }

    // Weight
    if (!weight) {
      newErrors.weight = 'Please enter your height weight';
      valid = false;
    } else if (parseInt(weight) < 30) {
      newErrors.weight = 'Oops, something went wrong! Please correct the marked fields.';
      valid = false;
    }

    // Height
    if (!height) {
      newErrors.height = 'Please enter your height height';
      valid = false;
    } else if (parseInt(height) < 120) {
      newErrors.height = 'Oops, something went wrong! Please correct the marked fields.';
      valid = false;
    }

    // Waist
    if (!waist) {
      newErrors.waist = 'Please enter your height waist';
      valid = false;
    } else if (parseInt(waist) < 0) {
      newErrors.waist = 'Oops, something went wrong! Please correct the marked fields.';
      valid = false;
    }

    // Hip
    if (!hip) {
      newErrors.hip = 'Please enter your height hip';
      valid = false;
    } else if (parseInt(hip) < 0) {
      newErrors.hip = 'Oops, something went wrong! Please correct the marked fields.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleInputChange = (input: string, value: string) => {
    switch (input) {
      case 'gender':
        setGender(value);
        setErrors({ ...errors, gender: '' });
        break;
      case 'weight':
        if (value === '' || /^[0-9]+$/.test(value)) {
          setWeight(value);
          setErrors({ ...errors, weight: '' });
        }
        break;
      case 'height':
        if (value === '' || /^[0-9]+$/.test(value)) {
          setHeight(value);
          setErrors({ ...errors, height: '' });
        }
        break;
      case 'waist':
        if (value === '' || /^[0-9]+$/.test(value)) {
          setWaist(value);
          setErrors({ ...errors, waist: '' });
        }
        break;
      case 'hip':
        if (value === '' || /^[0-9]+$/.test(value)) {
          setHip(value);
          setErrors({ ...errors, hip: '' });
        }
        break;
      default:
        break;
    }
  };

  const handleInputBlur = (input: string, value: string) => {
    const newErrors = { ...errors };
    let valid = true;

    switch (input) {
      case 'gender':
        if (!value) {
          newErrors.gender = 'Please select your gender';
          valid = false;
        }
        break;
      case 'weight':
        if (!value) {
          newErrors.weight = 'Please enter your weight ';
          valid = false;
        } else if (parseInt(value) < 30) {
          newErrors.weight = 'Oops, something went wrong! Please correct the marked fields.';
          valid = false;
        }
        break;
      case 'height':
        if (!value) {
          newErrors.height = 'Please enter your height';
          valid = false;
        } else if (parseInt(value) < 120) {
          newErrors.height = 'Oops, something went wrong! Please correct the marked fields.';
          valid = false;
        }
        break;
      case 'waist':
        if (!value) {
          newErrors.waist = 'Please enter your height waist';
          valid = false;
        } else if (parseInt(value) < 0) {
          newErrors.waist = 'Oops, something went wrong! Please correct the marked fields.';
          valid = false;
        }
        break;
      case 'hip':
        if (!value) {
          newErrors.hip = 'Please enter your height hip';
          valid = false;
        } else if (parseInt(value) < 0) {
          newErrors.hip = 'Oops, something went wrong! Please correct the marked fields.';
          valid = false;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
    return valid;
  };

  const calculateSize = () => {
    if (!validateInputs()) {
      return;
    }

    const waistNumber = parseInt(waist);
    const hipNumber = parseInt(hip);

    let calculatedSize = '';

    if (gender === 'male') {
      if (waistNumber <= 28 && hipNumber <= 35) calculatedSize = 'S';
      else if (waistNumber <= 31 && hipNumber <= 38) calculatedSize = 'M';
      else if (waistNumber <= 34 && hipNumber <= 41) calculatedSize = 'L';
      else if (waistNumber <= 37 && hipNumber <= 44) calculatedSize = 'XL';
      else if (waistNumber <= 40 && hipNumber <= 47) calculatedSize = '2XL';
      else calculatedSize = '3XL';
    } else if (gender === 'female') {
      if (waistNumber <= 24 && hipNumber <= 34) calculatedSize = 'S';
      else if (waistNumber <= 27 && hipNumber <= 37) calculatedSize = 'M';
      else if (waistNumber <= 30 && hipNumber <= 40) calculatedSize = 'L';
      else if (waistNumber <= 33 && hipNumber <= 43) calculatedSize = 'XL';
      else if (waistNumber <= 36 && hipNumber <= 46) calculatedSize = '2XL';
      else calculatedSize = '3XL';
    }

    setSize(calculatedSize);
    setIsPrinted(true);
  };

  return (
    <>
      <Head>
        <title>Shirt Size Calculator</title>
      </Head>
      <div className="container">
        <div className={`form ${isPrinted ? 'printed' : ''}`}>
          <h1 className="font-bold text-center text-gray-800 text-4xl ">Shirt Size Calculator</h1>
          <fieldset>
            <legend>Gender</legend>
            <select
              value={gender}
              onChange={(e) => handleInputChange('gender', e.target.value)}
              onBlur={(e) => handleInputBlur('gender', e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && <div className="error">{errors.gender}</div>}
          </fieldset>
          <fieldset>
            <legend>Weight (kg)</legend>
            <input
              type="text"
              value={weight}
              onChange={(e) => handleInputChange('weight', e.target.value)}
              onBlur={(e) => handleInputBlur('weight', e.target.value)}
            />
            {errors.weight && <div className="error">{errors.weight}</div>}
          </fieldset>
          <fieldset>
            <legend>Height (cm)</legend>
            <input
              type="text"
              value={height}
              onChange={(e) => handleInputChange('height', e.target.value)}
              onBlur={(e) => handleInputBlur('height', e.target.value)}
            />
            {errors.height && <div className="error">{errors.height}</div>}
          </fieldset>
          <fieldset>
            <legend>Waist (inches)</legend>
            <input
              type="text"
              value={waist}
              onChange={(e) => handleInputChange('waist', e.target.value)}
              onBlur={(e) => handleInputBlur('waist', e.target.value)}
            />
            {errors.waist && <div className="error">{errors.waist}</div>}
          </fieldset>
          <fieldset>
            <legend>Hip (inches)</legend>
            <input
              type="text"
              value={hip}
              onChange={(e) => handleInputChange('hip', e.target.value)}
              onBlur={(e) => handleInputBlur('hip', e.target.value)}
            />
            {errors.hip && <div className="error">{errors.hip}</div>}
          </fieldset>
          <div className="text-center font-bold">
            <button className="button" onClick={calculateSize}>
              Calculate 
            </button>
          </div>
          {size && (
            <div className="text-center text-gray-800 text-2xl mt-4 font-bold">
              Your Size: {size}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SizeCalculator;