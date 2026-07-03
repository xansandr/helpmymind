import { useForm, type Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { setCity } from '../../features/weather/weatherSlice';
import styles from './CitySearch.module.scss';

interface FormData {
  city: string;
}

const schema: yup.ObjectSchema<FormData> = yup.object({
  city: yup.string().required('Введите город').min(2, 'Минимум 2 символа'),
});

export function CitySearch() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema) as unknown as Resolver<FormData>,
  });

  const onSubmit = (data: FormData) => {
    dispatch(setCity(data.city));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input className={styles.input} placeholder="Название города" {...register('city')} />
      {errors.city && <span className={styles.error}>{errors.city.message}</span>}
      <button className={styles.button} type="submit">
        Поиск
      </button>
    </form>
  );
}
