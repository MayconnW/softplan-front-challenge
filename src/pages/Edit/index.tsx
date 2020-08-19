import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useCountry from 'hooks/useCountry';
import Input from 'components/shared/Input';
import { FiCamera, FiMapPin, FiMap, FiActivity } from 'react-icons/fi';
import { Button, Back } from 'components/shared';
import { Country } from 'interfaces/Country';
import { useForm } from 'react-hook-form';
import history from 'services/history';
import { Container, Card } from './styles';

interface Params {
  id: string;
}

interface FormProps {
  name: string;
  capital: string;
  area: string;
  population: string;
}

const Main: React.FC = () => {
  const [country, setCountry] = useState<Country | undefined>(undefined);
  const { id } = useParams<Params>();
  const { getCountry, updateCountry } = useCountry();

  useEffect(() => {
    setCountry(getCountry(id));
  }, [id, getCountry]);

  const { handleSubmit, register } = useForm<FormProps>({
    defaultValues: country,
  });

  const onSubmit = useCallback(
    (data: FormProps): void => {
      if (!country) return;
      const { area, capital, name, population } = data;
      updateCountry({ ...country, area, capital, name, population });
      history.goBack();
    },
    [country, updateCountry],
  );

  return (
    <Container>
      <Back />
      {country && (
        <Card>
          <div>
            <img src={country.flag.svgFile} alt={`${country.name} flag`} />
            <FiCamera size={24} />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              icon={FiMap}
              label="Country"
              defaultValue={country.name}
              name="name"
              register={e => register(e)}
              data-testid="_countryInputTest"
            />
            <Input
              icon={FiMapPin}
              label="Capital"
              defaultValue={country.capital}
              name="capital"
              register={e => register(e)}
              data-testid="_capitalInputTest"
            />
            <Input
              icon={FiActivity}
              label="Area"
              defaultValue={country.area}
              name="area"
              register={e => register(e)}
              data-testid="_areaInputTest"
            />
            <Input
              icon={FiActivity}
              label="Population"
              defaultValue={country.population}
              name="population"
              register={e => register(e)}
              data-testid="_populationInputTest"
            />
            <Button type="submit" data-testid="_saveButtonTest">
              Salvar
            </Button>
          </form>
        </Card>
      )}
    </Container>
  );
};

export default Main;
