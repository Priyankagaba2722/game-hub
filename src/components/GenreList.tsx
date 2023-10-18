import { HStack, List, ListItem, Image, Button, Spinner, Heading } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImgUrl from '../services/image-url';

interface Props {
    onSelectedGenre(genre: Genre): void;
    selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {


    const { data, isLoading, error } = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner />

    return (
        <>
            <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
            <List>
                {data.map(genre => <ListItem key={genre.id} paddingY='5px' >
                    <HStack>
                        <Image objectFit='cover' boxSize='36px' src={getCroppedImgUrl(genre.image_background)} borderRadius={'10px'} />
                        <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} fontSize={'lg'} variant='link' onClick={() => onSelectedGenre(genre)}>{genre.name}</Button>
                    </HStack>
                </ListItem>)}
            </List>
        </>
    )
}

export default GenreList