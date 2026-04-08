import type { Project } from '../data/portfolio';

export interface ProjectMediaSource {
    src: string;
    kind: 'image' | 'link' | 'embed' | 'placeholder';
    label?: string;
}

const placeholderMedia = '/project-placeholder.svg';

const getCoverImage = ( project: Project ) =>
{
    if ( project.coverImage )
    {
        return project.coverImage;
    }

    return null;
};

const getDetailImage = ( project: Project ) =>
{
    return project.detailContent?.find( ( block ) => block.type === 'image' )?.content || null;
};

const getPrimaryLink = ( project: Project ) =>
{
    return project.liveUrl || project.githubUrl || null;
};

const getYouTubeVideoId = ( url: URL ) =>
{
    const hostname = url.hostname.replace( /^www\./, '' );

    if ( hostname === 'youtu.be' )
    {
        return url.pathname.split( '/' ).filter( Boolean )[ 0 ] || null;
    }

    if ( hostname === 'youtube.com' || hostname === 'm.youtube.com' )
    {
        if ( url.pathname === '/watch' )
        {
            return url.searchParams.get( 'v' );
        }

        if ( url.pathname.startsWith( '/shorts/' ) || url.pathname.startsWith( '/embed/' ) )
        {
            return url.pathname.split( '/' ).filter( Boolean )[ 1 ] || null;
        }
    }

    return null;
};

const getGitHubPreview = ( url: URL ) =>
{
    if ( url.hostname !== 'github.com' )
    {
        return null;
    }

    const segments = url.pathname.split( '/' ).filter( Boolean );
    if ( segments.length < 2 )
    {
        return null;
    }

    return `https://opengraph.githubassets.com/1/${ segments[ 0 ] }/${ segments[ 1 ] }`;
};

const getYouTubePreview = ( url: URL ) =>
{
    const videoId = getYouTubeVideoId( url );
    return videoId ? `https://i.ytimg.com/vi/${ videoId }/hqdefault.jpg` : null;
};

const getYouTubeEmbed = ( url: URL ) =>
{
    const videoId = getYouTubeVideoId( url );
    return videoId ? `https://www.youtube.com/embed/${ videoId }` : null;
};

const getLinkPreview = ( rawUrl: string ) =>
{
    try
    {
        const url = new URL( rawUrl );
        return (
            getGitHubPreview( url ) ||
            getYouTubePreview( url ) ||
            `https://image.thum.io/get/width/1200/crop/800/noanimate/${ url.toString() }`
        );
    } catch
    {
        return null;
    }
};

export const getProjectMediaSources = ( project: Project ): ProjectMediaSource[] =>
{
    const seen = new Set<string>();
    const sources: ProjectMediaSource[] = [];

    const pushSource = (
        src: string | null | undefined,
        kind: ProjectMediaSource[ 'kind' ],
        label?: string
    ) =>
    {
        if ( !src || seen.has( src ) )
        {
            return;
        }

        seen.add( src );
        sources.push( { src, kind, label } );
    };

    const primaryLink = getPrimaryLink( project );
    let youtubeEmbed: string | null = null;

    if ( primaryLink )
    {
        try
        {
            youtubeEmbed = getYouTubeEmbed( new URL( primaryLink ) );
        } catch
        {
            youtubeEmbed = null;
        }
    }

    pushSource( getCoverImage( project ), 'image' );
    pushSource( youtubeEmbed, 'embed', 'YouTube' );
    pushSource( getLinkPreview( primaryLink || '' ), 'link', 'Link Preview' );
    pushSource( getDetailImage( project ), 'image' );
    pushSource( placeholderMedia, 'placeholder', 'Placeholder' );

    return sources;
};
