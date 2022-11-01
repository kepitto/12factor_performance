CREATE TABLE performanceData
(
    id SERIAL,
    cam text,
    cpu float,
    latency int,
    CONSTRAINT performanceData_pkey PRIMARY KEY (id)
);

INSERT INTO performanceData(cam, cpu, latency) VALUES
 ('cam1', '80', '100'),
 ('cam2', '80', '70'),
 ('cam1', '79', '98');
