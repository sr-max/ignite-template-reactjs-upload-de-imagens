import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<string>();

  const handleViewImage = (url: string): void => {
    setSelectedImage(url);
    onOpen();
  };

  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        {cards.map(card => (
          <Card key={card.id} data={card} viewImage={handleViewImage} />
        ))}
      </SimpleGrid>

      <ModalViewImage
        imgUrl={selectedImage}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}
