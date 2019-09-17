DROP TABLE song;

CREATE TABLE song (
    id SERIAL,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    filename TEXT NOT NULL,
    song_url TEXT NOT NULL,
    created_at DATE NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO song (id,title,author,filename,song_url) VALUES 
(3,'Frag Out','DJ-ASSAS1N','84890d6a-2af0-4710-8070-c1f33e0ff175.mp3','/api/songs/file/84890d6a-2af0-4710-8070-c1f33e0ff175.mp3'),
(4,'Vitality','Elektronomia','48c79c7a-4959-4e13-a13e-87f7de5f2bc6.mp3','/api/songs/file/48c79c7a-4959-4e13-a13e-87f7de5f2bc6.mp3'),
(5,'The Long Road Home','Inukshuk','dae72b91-3f7c-423e-af84-b39e7e36595a.mp3','/api/songs/file/dae72b91-3f7c-423e-af84-b39e7e36595a.mp3'),
(6,'Cloud 9','Itro & Tobu','7e28258a-ed63-4e5f-b827-f7abb9ff8fa5.mp3','/api/songs/file/7e28258a-ed63-4e5f-b827-f7abb9ff8fa5.mp3'),
(7,'Arrow','Jim Yosef','42eb7635-5bf5-4b01-8a5c-04af22569d65.mp3','/api/songs/file/42eb7635-5bf5-4b01-8a5c-04af22569d65.mp3'),
(8,'Firefly','Jim Yosef','660e0880-2df6-4eb6-a7de-f281f9247b09.mp3','/api/songs/file/660e0880-2df6-4eb6-a7de-f281f9247b09.mp3'),
(10,'We Are','Jo Cohen & Sex Whales','6924a445-593b-43f2-bd0e-8041c3783108.mp3','/api/songs/file/6924a445-593b-43f2-bd0e-8041c3783108.mp3'),
(12,'Hope','Tobu','29b0d0c8-f524-458e-acdc-f47df8e7b5ef.mp3','/api/songs/file/29b0d0c8-f524-458e-acdc-f47df8e7b5ef.mp3'),
(13,'Sound of Goodbye','Tobu','18d055f7-d53d-4e4c-bdb1-31a0b7faa687.mp3','/api/songs/file/18d055f7-d53d-4e4c-bdb1-31a0b7faa687.mp3'),
(14,'Aperture','Unison','8aa2c8c3-45d9-4393-ab0b-8c1f5ea58880.mp3','/api/songs/file/8aa2c8c3-45d9-4393-ab0b-8c1f5ea58880.mp3'),
(16,'Me & You (feat. Axol)','Uplink & Alex Skrindo','cef29cff-d991-4b0f-ad06-77b00e0d2527.mp3','/api/songs/file/cef29cff-d991-4b0f-ad06-77b00e0d2527.mp3');