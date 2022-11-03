CREATE TABLE performanceData
(
    id SERIAL,
    cam text,
    cpu int,
    latency int,
    CONSTRAINT performanceData_pkey PRIMARY KEY (id)
);
